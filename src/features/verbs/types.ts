import {z} from "zod";
import {verbSchema} from "@/features/verbs/schemas";
import {verbsTable} from "@/db/verbs";

export type VerbFormData = z.infer<typeof verbSchema>;
export type DbVerb = typeof verbsTable.$inferSelect;
export type DbNewVerb = typeof verbsTable.$inferInsert;