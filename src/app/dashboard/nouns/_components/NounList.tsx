import {DbNoun} from "@/features/nouns/types";
import WordListLayout from "@/app/dashboard/_components/WordListLayout";
import WordListItem from "@/app/dashboard/_components/WordListItem";
import DeleteWordButton from "@/app/dashboard/_components/DeleteWordButton";
import {deleteNounAction} from "@/features/nouns/actions";

interface NounListProps {
    nouns: DbNoun[]
}

function NounList({nouns}: NounListProps) {
    return (
        <WordListLayout>
            {nouns.map(noun => (
                <WordListItem key={noun.id}>
                    <h3>{noun.word}</h3>
                    <span>{noun.associations}</span>
                    <DeleteWordButton wordId={noun.id} serverAction={deleteNounAction} />
                </WordListItem>
            ))}
        </WordListLayout>
    );
}

export default NounList;