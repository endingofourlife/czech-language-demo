import {ConjugationRules, ConjugationType, CzechPronoun, IrregularVerbs} from "@/lib/constants";

export function getCzechVerbEnding(pronoun: CzechPronoun, infinitive: string, type: ConjugationType): string {
    if (type === "IRREGULAR") {
        const irregularForm = IrregularVerbs[infinitive]?.[pronoun];
        // If the verb is marked as irregular, but we don't have a form for it, return a placeholder
        return irregularForm || `[irregular: ${infinitive}]`;
    }
    return ConjugationRules[type]?.[pronoun] || `[unknown type: ${type}]`;
}

export function getFullConjugatedForm(pronoun: CzechPronoun, infinitive: string, type: ConjugationType): string {
    if (type === "IRREGULAR") {
        return IrregularVerbs[infinitive]?.[pronoun] || infinitive;
    }

    // For regular verbs, the stem is typically the infinitive minus the last two characters (the "t" and "i" of "delat", for example)
    const stem = infinitive.slice(0, -2);
    const ending = getCzechVerbEnding(pronoun, infinitive, type);
    return stem + ending;
}

export function checkAnswer(userAnswer: string, pronoun: CzechPronoun, infinitive: string, type: ConjugationType): boolean {
    const correctForm = getFullConjugatedForm(pronoun, infinitive, type);
    return userAnswer.trim().toLowerCase() === correctForm.toLowerCase();
}