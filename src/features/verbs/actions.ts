"use server";

import {mustGetSessionUser} from "@/features/auth/require-session";
import {createVerbDb, deleteVerbDb, getUserVerbsDb} from "@/features/verbs/queries";
import {cacheLife, cacheTag, updateTag} from "next/cache";
import {DbNewVerb, DbVerb, VerbFormData} from "@/features/verbs/types";
import {ActionResult} from "@/shared/types/actionResult";
import {verbSchema} from "@/features/verbs/schemas";
import {errorActionResult, successActionResult} from "@/lib/action-utils";

const getCacheKey = (userId: string): string => "user-verbs-" + userId;

export async function getUserVerbsAction(userId: string): Promise<DbVerb[]>{
    "use cache"
    cacheLife("days");
    cacheTag(getCacheKey(userId));

    return await getUserVerbsDb(userId);
}

export async function createVerbAction(data: VerbFormData): Promise<ActionResult> {
    const validatedVerb = verbSchema.safeParse(data);
    if (!validatedVerb.success){
        return errorActionResult("Invalid verb data");
    }

    const user = await mustGetSessionUser();
    const verbData: DbNewVerb = {...data, ownerId: user.id};

    try {
        await createVerbDb(verbData);
        updateTag(getCacheKey(user.id));
        return successActionResult("Verb created successfully");
    } catch (error) {
        console.error('Error creating verb: ', error);
        return errorActionResult("Failed to create a verb");
    }
}

export async function deleteVerbAction(verbId: number): Promise<ActionResult> {
    const user = await mustGetSessionUser();
    try {
        await deleteVerbDb(verbId);
        updateTag(getCacheKey(user.id));
        return successActionResult("Verb deleted successfully");
    } catch (error) {
        console.error('Error deleting verb: ', error);
        return errorActionResult("Failed to delete the verb");
    }
}