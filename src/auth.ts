import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import db from "@/database";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {accounts, sessions, users, verificationTokens} from "@/db/schema";

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    providers: [Google]
})