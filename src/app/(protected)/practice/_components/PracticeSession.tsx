"use client";

import {useState} from "react";
import {CzechPronouns} from "@/lib/constants";
import NoWordsCard from "@/app/(protected)/practice/_components/NoWordsCard";
import QuestionCard from "@/app/(protected)/practice/_components/QuestionCard";
import {DbVerb} from "@/features/verbs/types";
import {getRandomElement} from "@/shared/lib/random";

type PracticeSessionProps = {
    words: DbVerb[]
}

function PracticeSession({words}: PracticeSessionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPronoun, setCurrentPronoun] = useState("");

    function startPractice(){
        setCurrentPronoun(getRandomElement<string>(CzechPronouns));
    }

    function handleNextQuestion() {
        setCurrentIndex((currentIndex + 1) % words.length);
        setCurrentPronoun(getRandomElement<string>(CzechPronouns));
    }

    if (words.length === 0) {
        return <NoWordsCard />
    }
    return (
        <div>
            <h2>Words to practice: {words.length}</h2>
            {currentPronoun
                ? <QuestionCard pronoun={currentPronoun} word={words[currentIndex]} onNext={handleNextQuestion}/>
                : <button onClick={startPractice}>Start Practice!</button>
            }
        </div>
    );
}

export default PracticeSession;