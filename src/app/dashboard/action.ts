'use server';

import {ActionResult} from "@/types/actionResult";
import {wordsTable} from "@/db/words";
import {auth} from "@/auth";
import {wordSchema} from "@/features/words/schemas";
import {Word} from "@/features/words/types";
import {createWord} from "@/features/words/queries";

export async function createWordAction(data: Word): Promise<ActionResult>{
    const session = await auth();
    if (!session?.user?.id) {
        return {
            success: false,
            message: "User not authenticated."
        }
    }

    const validatedWord = wordSchema.safeParse(data);
    if (!validatedWord.success){
        return {
            success: false,
            message: "Invalid word data"
        }
    }

    const wordData: typeof wordsTable.$inferInsert = {...data, ownerId: session.user.id};
    try {
        await createWord(wordData);
        return {
            success: true,
            message: "Word created successfully"
        }
    } catch (error) {
        console.error('Error creating word: ', error);
        return {
            success: false,
            message: "Failed to create a word"
        }
    }
}