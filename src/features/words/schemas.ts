import {z} from "zod";
import {ConjugationTypes} from "@/lib/constants";
import {wordsTable} from "@/db/words";

export const wordSchema = z.object({
    infinitive: z.string().min(1, "Infinitive is required").max(255),
    conjugationType: z.enum(ConjugationTypes),
    associations: z.string(),
});

export type DbWordInsert = typeof wordsTable.$inferInsert;
export type DbWord = typeof wordsTable.$inferSelect;