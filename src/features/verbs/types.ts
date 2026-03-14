import {z} from "zod";
import {wordSchema} from "@/features/words/schemas";

export type WordFormData = z.infer<typeof wordSchema>;