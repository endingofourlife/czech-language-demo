import {mustGetSessionUser} from "@/lib/auth-utils";
import VerbQuizClient from "@/app/(protected)/practice/verbs/_components/VerbQuizClient";
import {getRandomFromArray} from "@/lib/random-utils";
import {CzechPronoun, CzechPronouns} from "@/lib/constants";
import {getRandomVerbsDb} from "@/features/verbs/queries";
import {getFullConjugatedForm} from "@/lib/czech-utils";
import {getRandomItems, shuffleArray} from "@/lib/array-utils";
import {QuizQuestion} from "@/types/quiz";

async function VerbQuiz() {
    const user = await mustGetSessionUser();
    const verbs = await getRandomVerbsDb(user.id);

    const questions: QuizQuestion[] = verbs.map((verb) => {
        const pronoun = getRandomFromArray<CzechPronoun>(CzechPronouns);

        const correct = getFullConjugatedForm(
            pronoun,
            verb.infinitive,
            verb.conjugationType
        );

        const otherPronouns = CzechPronouns.filter(p => p !== pronoun);

        const wrongAnswers = getRandomItems(otherPronouns, 3).map(p =>
            getFullConjugatedForm(p as CzechPronoun, verb.infinitive, verb.conjugationType)
        );

        const answers = shuffleArray([correct, ...wrongAnswers]);

        return {
            verb,
            pronoun,
            answers,
            correctAnswer: correct,
        };
    });

    return (
        <VerbQuizClient questions={questions} />
    );
}

export default VerbQuiz;