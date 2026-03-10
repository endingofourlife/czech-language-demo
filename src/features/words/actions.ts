"use server";

import {mustGetSessionUser} from "@/lib/auth-utils";
import {createWordDb, getUserWordsDb} from "@/features/words/queries";
import {cacheLife, cacheTag, revalidateTag, updateTag} from "next/cache";
import {WordFormData} from "@/features/words/types";
import {ActionResult} from "@/types/actionResult";
import {wordSchema, DbWordInsert, DbWord} from "@/features/words/schemas";
import {errorActionResult, successActionResult} from "@/lib/action-utils";

export async function getUserWordsAction(userId: string): Promise<DbWord[]>{
    "use cache"
    cacheLife("days");
    cacheTag(`user-words-${userId}`);

    return await getUserWordsDb(userId);
}

export async function createWordAction(data: WordFormData): Promise<ActionResult> {
    const user = await mustGetSessionUser();

    const validatedWord = wordSchema.safeParse(data);
    if (!validatedWord.success){
        return errorActionResult("Invalid word data");
    }

    const wordData: DbWordInsert = {...data, ownerId: user.id};
    try {
        await createWordDb(wordData);
        updateTag(`user-words-${user.id}`);
        return successActionResult("Word created successfully");
    } catch (error) {
        console.error('Error creating word: ', error);
        return errorActionResult("Failed to create a word");
    }
}