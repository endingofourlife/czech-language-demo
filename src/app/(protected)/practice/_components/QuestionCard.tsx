"use client";

import QuestionForm from "@/app/(protected)/practice/_components/QuestionForm";
import {useState} from "react";
import {DbVerb} from "@/features/verbs/types";

interface QuestionCardProps {
    pronoun: string;
    word: DbVerb;
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