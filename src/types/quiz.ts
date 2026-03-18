import {DbVerb} from "@/features/verbs/types";
import {CzechPronoun} from "@/lib/constants";

export type QuizQuestion = {
    verb: DbVerb;
    pronoun: CzechPronoun;
    answers: string[];
    correctAnswer: string;
};