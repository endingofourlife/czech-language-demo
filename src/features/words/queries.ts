import {wordsTable} from "@/db/words";
import db from "@/database";
import {eq} from "drizzle-orm";
import {DbWord, DbWordInsert} from "@/features/words/schemas";


export async function createWordDb(word: DbWordInsert): Promise<void> {
    console.log("Inserting word into DB: ", word);
    await db.insert(wordsTable).values(word);
}

export async function getUserWordsDb(userId: string): Promise<DbWord[]> {
    console.log("Fetching words for user: ", userId);
    return db.select().from(wordsTable).where(eq(wordsTable.ownerId, userId));
}

export async function deleteWordDb(wordId: number): Promise<void> {
    console.log("Deleting word with ID: ", wordId);
    await db.delete(wordsTable).where(eq(wordsTable.id, wordId));
}