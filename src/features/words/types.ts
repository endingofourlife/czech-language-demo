import {z} from "zod";
import {wordSchema} from "@/features/words/schemas";

export type Word = z.infer<typeof wordSchema>;