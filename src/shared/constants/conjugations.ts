// TODO: Add enum instead of string literal types
export const ConjugationTypes = ["DELAT","ROZUMET","CIST","PRACOVAT","IRREGULAR"] as const;
export type ConjugationType = typeof ConjugationTypes[number];

export const ConjugationRules: Record<ConjugationType, Record<string, string>> = {
    DELAT: {
        "já": "ám",
        "ty": "áš",
        "on": "á",
        "ona": "á",
        "ono / to": "á",
        "my": "áme",
        "vy": "áte",
        "oni": "ají"
    },
    ROZUMET: {
        "já": "ím",
        "ty": "íš",
        "on": "í",
        "ona": "í",
        "ono / to": "í",
        "my": "íme",
        "vy": "íte",
        "oni": "í"
    },
    CIST: {
        "já": "u",
        "ty": "eš",
        "on": "e",
        "ona": "e",
        "ono / to": "e",
        "my": "eme",
        "vy": "ete",
        "oni": "ou"
    },
    PRACOVAT: {
        "já": "uji",
        "ty": "uješ",
        "on": "uje",
        "ona": "uje",
        "ono / to": "uje",
        "my": "ujeme",
        "vy": "ujete",
        "oni": "ují"
    },
    IRREGULAR: {
        "já": "",
        "ty": "",
        "on": "",
        "ona": "",
        "ono / to": "",
        "my": "",
        "vy": "",
        "oni": ""
    }
};