"use client";

import React, {useState} from 'react';
import {NounQuizQuestion} from "@/shared/types/quiz";
import toast from "react-hot-toast";

interface NounQuizClientProps {
    questions: NounQuizQuestion[];
}

function NounQuizClient({questions}: NounQuizClientProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];

    function handleAnswer(answer: string) {
        if (answer === currentQuestion.correctAnswer) {
            toast.success("Correct ✅", {
                position: 'bottom-center',
                duration: 900,
            });
        } else {
            toast.error("Wrong ❌", {
                position: 'bottom-center',
                duration: 900,
            });
        }

        handleNextQuestion();
    }

    function handleNextQuestion() {
        setCurrentIndex(prev => {
            if (prev + 1 >= questions.length) {
                return 0;
            }
            return prev + 1;
        });
    }

    if (!questions.length) {
        return <p>No nouns available</p>;
    }

    return (
        <article className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-8 text-center gap-2 p-8 border-2 border-primary-stroke bg-secondary-bg rounded-md w-full max-w-2xl shadow-lg">
                <span className="text-sm uppercase tracking-wide text-secondary-text font-medium">
                    Select a correct association
                </span>

                <h2 className="text-primary-text font-bold text-4xl">
                    {`"${currentQuestion.noun.word}"`}
                </h2>
            </div>

            <ul className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                {currentQuestion.answers.map((answer, i) => (
                    <li key={i} className="w-full">
                        <button
                            onClick={() => handleAnswer(answer)}
                            className="w-full border-2 border-primary-stroke rounded-md bg-secondary-bg p-4 text-lg font-medium
                            hover:border-primary-stroke/80 hover:bg-secondary-bg/60 hover:shadow-lg
                            hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default NounQuizClient;