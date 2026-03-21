"use server";

import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {SessionUser} from "@/shared/types/sessionUser";

export async function mustGetSessionUser(): Promise<SessionUser> {
    const session = await auth();
    if (!session?.user?.id) {
        redirect("/auth");
    }
    return session.user as SessionUser;
}