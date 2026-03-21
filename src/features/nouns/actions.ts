"use server"

import {cacheLife, cacheTag, updateTag} from "next/cache";
import {createNounDb, deleteNounDb, getUserNounsDb} from "@/features/nouns/queries";
import {DbNewNoun, DbNoun, NounFormData} from "@/features/nouns/types";
import {ActionResult} from "@/shared/types/actionResult";
import {mustGetSessionUser} from "@/features/auth/server/require-session";
import {nounSchema} from "@/features/nouns/schemas";
import {errorActionResult, successActionResult} from "@/lib/action-utils";

const getCacheKey = (userId: string): string => "user-nouns-" + userId;

export async function getUserNounsAction(userId: string): Promise<DbNoun[]> {
    "use cache"
    cacheLife("days")
    cacheTag(getCacheKey(userId));
    return await getUserNounsDb(userId);
}

export async function createNounAction(data: NounFormData): Promise<ActionResult> {
    const validatedNoun = nounSchema.safeParse(data);
    if (!validatedNoun.success) {
        return errorActionResult('Invalid noun data');
    }

    const user = await mustGetSessionUser();
    const nounData: DbNewNoun = {...data, ownerId: user.id};

    try {
        await createNounDb(nounData);
        updateTag(getCacheKey(user.id));
        return successActionResult('Noun created successfully');
    } catch (error) {
        console.error('Error creating noun: ', error);
        return errorActionResult('Failed to create the noun');
    }
}

export async function deleteNounAction(nounId: number): Promise<ActionResult> {
    const user = await mustGetSessionUser();

    try {
        await deleteNounDb(nounId);
        updateTag(getCacheKey(user.id));
        return successActionResult('Noun deleted successfully');
    } catch (error) {
        console.error('Error deleting noun: ', error);
        return errorActionResult('Failed to delete the noun');
    }
}