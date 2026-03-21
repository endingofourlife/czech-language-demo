"use server";

import {signIn} from "@/auth";

export async function signInWithGoogle(): Promise<void> {
    console.log("Signing in with Google...");
    await signIn("google", {redirectTo: "/dashboard"});
}