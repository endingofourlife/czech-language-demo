import {mustGetSessionUser} from "@/features/auth/require-session";
import VerbQuizClient from "@/app/(protected)/practice/verbs/_components/VerbQuizClient";
import {CzechPronoun, CzechPronouns} from "@/lib/constants";
import {getRandomVerbsDb} from "@/features/verbs/queries";
import {getFullConjugatedForm} from "@/shared/lib/czech-conjugation";
import {getRandomElement, getRandomSample, shuffle} from "@/shared/lib/random";
import {VerbQuizQuestion} from "@/shared/types/quiz";

async function VerbQuiz() {
    const user = await mustGetSessionUser();
    const verbs = await getRandomVerbsDb(user.id);

    const questions: VerbQuizQuestion[] = verbs.map((verb) => {
        const pronoun = getRandomElement<CzechPronoun>(CzechPronouns);

        const correct = getFullConjugatedForm(
            pronoun,
            verb.infinitive,
            verb.conjugationType
        );

        const otherPronouns = CzechPronouns.filter(p => p !== pronoun);

        const wrongAnswers = getRandomSample(otherPronouns, 3).map(p =>
            getFullConjugatedForm(p as CzechPronoun, verb.infinitive, verb.conjugationType)
        );

        const answers = shuffle([correct, ...wrongAnswers]);

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