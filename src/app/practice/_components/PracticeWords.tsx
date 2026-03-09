import React from 'react';
import {getWordsByOwnerId} from "@/features/words/queries";
import {mustGetSessionUser} from "@/lib/auth-utils";

async function PracticeWords() {
    const user = await mustGetSessionUser();
    const words = await getWordsByOwnerId(user.id);

    return (
        <div>
            <h1>Practice Words</h1>
            <ul>
                {words.map(word => (
                    <li key={word.id}>{word.infinitive} --- {word.associations}</li>
                ))}
            </ul>
        </div>
    );
}

export default PracticeWords;