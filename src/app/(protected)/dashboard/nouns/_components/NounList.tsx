import {DbNoun} from "@/features/nouns/types";
import WordListLayout from "@/app/(protected)/dashboard/_components/WordListLayout";
import WordListItem from "@/app/(protected)/dashboard/_components/WordListItem";
import DeleteWordButton from "@/app/(protected)/dashboard/_components/DeleteWordButton";
import {deleteNounAction} from "@/features/nouns/actions";

interface NounListProps {
    nouns: DbNoun[]
}

function NounList({nouns}: NounListProps) {

    if (nouns.length === 0) {
        return (
            <p className="text-secondary-text text-center text-lg mt-6">No nouns added yet. Start by adding your first noun!</p>
        );
    }

    return (
        <WordListLayout>
            {nouns.map(noun => (
                <WordListItem key={noun.id}>
                    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                        <h3 className="text-primary-text font-bold text-xl col-span-2">{noun.word}</h3>
                        <span className="text-secondary-text text-lg">{noun.associations}</span>
                    </div>
                    <DeleteWordButton wordId={noun.id} serverAction={deleteNounAction} />
                </WordListItem>
            ))}
        </WordListLayout>
    );
}

export default NounList;