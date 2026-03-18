import {DbVerb} from "@/features/verbs/types";
import {CzechPronoun} from "@/lib/constants";
import {DbNoun} from "@/features/nouns/types";

export type VerbQuizQuestion = {
    verb: DbVerb;
    pronoun: CzechPronoun;
    answers: string[];
    correctAnswer: string;
};

export type NounQuizQuestion = {
    noun: DbNoun,
    answers: string[],
    correctAnswer: string,
}