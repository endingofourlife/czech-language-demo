import React from 'react';
import {auth} from "@/auth";
import {getWordsByOwnerId} from "@/features/words/queries";
import {redirect} from "next/navigation";

async function PracticeWords() {
    const session = await auth();
    if (!session?.user?.id) {
        redirect('/login');
    }

    const words = await getWordsByOwnerId(session.user.id);

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