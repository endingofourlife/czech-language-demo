import {DbVerb} from "@/features/verbs/types";
import WordListLayout from "@/app/dashboard/_components/WordListLayout";
import WordListItem from "@/app/dashboard/_components/WordListItem";
import {deleteVerbAction} from "@/features/verbs/actions";
import DeleteWordButton from "@/app/dashboard/_components/DeleteWordButton";

interface VerbListProps {
    verbs: DbVerb[];
}

function VerbList({ verbs }: VerbListProps) {
    return (
        <WordListLayout>
            {verbs.map(verb => (
                <WordListItem key={verb.id}>
                    <h3>{verb.infinitive}</h3>
                    <span>{verb.associations}</span>
                    <span>{verb.conjugationType}</span>
                    <DeleteWordButton wordId={verb.id} serverAction={deleteVerbAction}/>
                </WordListItem>
            ))}
        </WordListLayout>
    );
}

export default VerbList;