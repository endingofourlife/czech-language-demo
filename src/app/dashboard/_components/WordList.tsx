import {getUserWordsAction} from "@/features/words/actions";
import {mustGetSessionUser} from "@/lib/auth-utils";

async function WordList() {
    const user = await mustGetSessionUser();
    const words = await getUserWordsAction(user.id);

    return (
        <ul>
            {words.map(word => (
                <li key={word.id}>
                    <strong>{word.infinitive}</strong> --- {word.associations}
                </li>
            ))}
        </ul>
    );
}

export default WordList;