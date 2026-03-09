import {integer, pgTable, text, timestamp} from "drizzle-orm/pg-core";
import {ConjugationTypeEnum} from "@/db/enums";
import {users} from "@/db/users";

export const wordsTable = pgTable("words", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    infinitive: text("infinitive").notNull().unique(),
    associations: text("associations").notNull(),
    conjugationType: ConjugationTypeEnum().notNull(),
    createdAt: timestamp("created_at").defaultNow(),

    // relations
    ownerId: text("owner_id").references(() => users.id, { onDelete: "cascade" }),
});

export type NewWord = typeof wordsTable.$inferInsert;