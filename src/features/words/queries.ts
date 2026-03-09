import {wordsTable} from "@/db/words";
import db from "@/database";
import {eq} from "drizzle-orm";


export async function createWord(word: typeof wordsTable.$inferInsert): Promise<void> {
    await db.insert(wordsTable).values(word);
}

export async function getWordsByOwnerId(ownerId: string): Promise<typeof wordsTable.$inferSelect[]> {
    return db.select().from(wordsTable).where(eq(wordsTable.ownerId, ownerId));
}