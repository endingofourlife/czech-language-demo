import db from "@/database";
import {eq, sql} from "drizzle-orm";
import {DbNewVerb, DbVerb} from "@/features/verbs/types";
import {verbsTable} from "@/db/verbs";

export async function createVerbDb(verb: DbNewVerb): Promise<void> {
    console.log("Inserting verb into DB: ", verb);
    await db.insert(verbsTable).values(verb);
}

export async function getUserVerbsDb(userId: string): Promise<DbVerb[]> {
    console.log("Fetching verbs for user: ", userId);
    return db.select().from(verbsTable).where(eq(verbsTable.ownerId, userId));
}

export async function deleteVerbDb(verbId: number): Promise<void> {
    console.log("Deleting verb with ID: ", verbId);
    await db.delete(verbsTable).where(eq(verbsTable.id, verbId));
}

export async function getRandomVerbsDb(userId: string, limit: number = 20): Promise<DbVerb[]> {
    console.log(`Fetching ${limit} random verbs for user: ${userId}`);
    return db
        .select()
        .from(verbsTable)
        .where(eq(verbsTable.ownerId, userId))
        .orderBy(sql`RANDOM()`)
        .limit(limit);
}