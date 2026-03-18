import {nounsTable} from "@/db/nouns";
import db from "@/database";
import {eq, sql} from "drizzle-orm";
import {DbNewNoun, DbNoun} from "@/features/nouns/types";

export async function createNounDb(noun: DbNewNoun): Promise<void> {
    console.log("Inserting noun into DB: ", noun);
    await db.insert(nounsTable).values(noun);
}

export async function getUserNounsDb(userId: string): Promise<DbNoun[]> {
    console.log("Fetching nouns for user: ", userId);
    return db.select().from(nounsTable).where(eq(nounsTable.ownerId, userId));
}

export async function deleteNounDb(nounId: number): Promise<void> {
    console.log("Deleting noun with ID: ", nounId);
    await db.delete(nounsTable).where(eq(nounsTable.id, nounId));
}

export async function getRandomNounsDb(userId: string, limit: number = 20): Promise<DbNoun[]> {
    console.log(`Fetching ${limit} random nouns for user: ${userId}`);
    return db
        .select()
        .from(nounsTable)
        .where(eq(nounsTable.ownerId, userId))
        .orderBy(sql`RANDOM()`)
        .limit(limit);
}