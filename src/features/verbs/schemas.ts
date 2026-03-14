import {z} from "zod";
import {ConjugationTypes} from "@/lib/constants";

export const verbSchema = z.object({
    infinitive: z.string().min(1, "Infinitive is required").max(255),
    conjugationType: z.enum(ConjugationTypes),
    associations: z.string(),
});