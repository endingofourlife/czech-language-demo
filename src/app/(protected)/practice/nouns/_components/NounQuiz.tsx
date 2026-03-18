import React from 'react';
import {mustGetSessionUser} from "@/lib/auth-utils";
import {getRandomNounsDb} from "@/features/nouns/queries";
import {NounQuizQuestion} from "@/types/quiz";
import {DbNoun} from "@/features/nouns/types";
import {getRandomItems, shuffleArray} from "@/lib/array-utils";
import NounQuizClient from "@/app/(protected)/practice/nouns/_components/NounQuizClient";

async function NounQuiz() {
    const user = await mustGetSessionUser();
    const nouns = await getRandomNounsDb(user.id);

    const questions: NounQuizQuestion[] = nouns.map((noun) => {
        const correct = noun.associations;

        const otherNouns = nouns.filter(n => n.id !== noun.id);
        const wrongAnswers = getRandomItems(otherNouns, 3).map((n: DbNoun) => n.associations);

        const answers = shuffleArray([correct, ...wrongAnswers]);
        return { noun, answers, correctAnswer: correct }
    })

    if (nouns.length < 4) {
        return <h2 className="text-lg md:text-xl text-center text-red-800 font-medium">You must have more than 4 nouns to generate quiz</h2>
    }

    return (
        <NounQuizClient questions={questions} />
    );
}

export default NounQuiz;