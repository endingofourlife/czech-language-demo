import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import db from "@/database";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {accounts, sessions, users, verificationTokens} from "@/db/schema";
import GitHub from "@auth/core/providers/github";

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    providers: [Google, GitHub],
    // session: {
    //     strategy: 'jwt',
    // },
    // callbacks: {
    //     jwt({token, user}) {
    //         if (user) {
    //             token.id = user.id;
    //         }
    //         return token;
    //     },
    //     session({session, token}) {
    //         session.user.id = token.id as string;
    //         return session;
    //     }
    // }
})