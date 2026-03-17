import {DbVerb} from "@/features/verbs/types";
import WordListLayout from "@/app/(protected)/dashboard/_components/WordListLayout";
import WordListItem from "@/app/(protected)/dashboard/_components/WordListItem";
import {deleteVerbAction} from "@/features/verbs/actions";
import DeleteWordButton from "@/app/(protected)/dashboard/_components/DeleteWordButton";

interface VerbListProps {
    verbs: DbVerb[];
}

async function VerbList({ verbs }: VerbListProps) {
    if (verbs.length === 0) {
        return (
            <p className="text-secondary-text text-center text-lg mt-6">No verbs added yet. Start by adding your first verb!</p>
        );
    }

    return (
        <WordListLayout>
            {verbs.map(verb => (
                <WordListItem key={verb.id}>
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                        <h3 className="text-primary-text font-bold text-xl col-span-2">{verb.infinitive}</h3>
                        <span className="text-secondary-text text-lg">{verb.associations}</span>
                        <span className="text-secondary-text font-bold">[{verb.conjugationType}]</span>
                    </div>
                    <DeleteWordButton wordId={verb.id} serverAction={deleteVerbAction}/>
                </WordListItem>
            ))}
        </WordListLayout>
    );
}

export default VerbList;