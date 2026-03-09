import React from 'react';
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {getWordsByOwnerId} from "@/features/words/queries";

async function WordList() {
    const session = await auth();
    if (!session?.user?.id) {
        redirect('/login');
    }
    const words = await getWordsByOwnerId(session.user.id);

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