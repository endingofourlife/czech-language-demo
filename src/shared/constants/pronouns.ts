export const CzechPronouns: string[] = ["já", "ty", "on", "ona", "ono / to", "my", "vy", "oni"] as const;
export type CzechPronoun = typeof CzechPronouns[number];
