import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import {ConjugationTypeEnum} from "@/db/enums";

export const verbsTable = pgTable("verbs", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    infinitive: text("infinitive").notNull().unique(),
    associations: text("associations").notNull(),
    conjugationType: ConjugationTypeEnum().notNull(),
    createdAt: timestamp("created_at").defaultNow(),

    // relations
    ownerId: text("owner_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
});