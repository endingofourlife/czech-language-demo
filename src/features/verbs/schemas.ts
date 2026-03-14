import {z} from "zod";
import {ConjugationTypes} from "@/lib/constants";

export const verbSchema = z.object({
    infinitive: z.string().min(1, "Infinitive is required").max(255),
    conjugationType: z.enum(ConjugationTypes),
    associations: z.string().min(1, "Associations are required").max(255, "Associations must be less than 255 characters"),
});