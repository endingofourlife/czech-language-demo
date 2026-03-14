import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const nouns = pgTable("nouns", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    word: text("word").notNull().unique(),
    associations: text("associations").notNull(),
    createdAt: timestamp("created_at").defaultNow(),

    // relations
    ownerId: text("owner_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
});

export type DbNoun = typeof nouns.$inferSelect;
export type DbNewNoun = typeof nouns.$inferInsert;