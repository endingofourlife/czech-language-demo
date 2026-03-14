"use client";

import {useState} from "react";
import {getRandomFromArray} from "@/lib/random-utils";
import {CzechPronouns} from "@/lib/constants";
import NoWordsCard from "@/app/(protected)/practice/_components/NoWordsCard";
import QuestionCard from "@/app/(protected)/practice/_components/QuestionCard";
import {DbVerb} from "@/features/verbs/types";

type PracticeSessionProps = {
    words: DbVerb[]
}

function PracticeSession({words}: PracticeSessionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPronoun, setCurrentPronoun] = useState("");

    function startPractice(){
        setCurrentPronoun(getRandomFromArray<string>(CzechPronouns));
    }

    function handleNextQuestion() {
        setCurrentIndex((currentIndex + 1) % words.length);
        setCurrentPronoun(getRandomFromArray<string>(CzechPronouns));
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