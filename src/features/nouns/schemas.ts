import {z} from "zod";

export const nounSchema = z.object({
    word: z.string().min(1, "Word is required").max(255, "Word must be less than 255 characters"),
    associations: z.string().min(1, "Associations are required").max(255, "Associations must be less than 255 characters"),
});