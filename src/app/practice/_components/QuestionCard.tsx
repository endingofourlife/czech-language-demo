"use client";

import {DbWord} from "@/features/verbs/schemas";
import QuestionForm from "@/app/practice/_components/QuestionForm";
import {useState} from "react";

interface QuestionCardProps {
    pronoun: string;
    word: DbWord;
    onNext: () => void;
}

export default function QuestionCard({pronoun, word, onNext}: QuestionCardProps) {
    const [isAssociations, setIsAssociations] = useState(false);

    function toggleAssociations() {
        setIsAssociations(!isAssociations);
    }

    return <article>
        <h2>{pronoun} - {`"${word.infinitive}"`}</h2>
        {isAssociations
            ? <p>Associations: {word.associations}</p>
            : <button onClick={toggleAssociations}>Show associations</button>
        }

        <QuestionForm
            onNext={onNext}
            pronoun={pronoun}
            conjugationType={word.conjugationType}
            infinitive={word.infinitive}
        />
    </article>
}