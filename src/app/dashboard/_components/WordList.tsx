import {getUserWordsAction} from "@/features/words/actions";
import {mustGetSessionUser} from "@/lib/auth-utils";
import DeleteWordButton from "@/app/dashboard/_components/DeleteWordButton";

async function WordList() {
    const user = await mustGetSessionUser();
    const words = await getUserWordsAction(user.id);

    return (
        <ul>
            {words.map(word => (
                <li key={word.id}>
                    <strong>{word.infinitive}</strong> --- {word.associations}
                    <DeleteWordButton wordId={word.id}/>
                </li>
            ))}
        </ul>
    );
}

export default WordList;