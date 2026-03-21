"use server";

import {signIn} from "@/auth";

export async function signInWithGithub(): Promise<void> {
    console.log("Signing in with GitHub...");
    await signIn("github", { redirectTo: "/dashboard" });
}