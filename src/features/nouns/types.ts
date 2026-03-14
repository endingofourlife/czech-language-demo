import {z} from "zod";
import {nounSchema} from "@/features/nouns/schemas";
import {nounsTable} from "@/db/nouns";

export type NounFormData = z.infer<typeof nounSchema>
export type DbNoun = typeof nounsTable.$inferSelect;
export type DbNewNoun = typeof nounsTable.$inferInsert;