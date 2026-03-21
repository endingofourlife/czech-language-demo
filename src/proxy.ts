import {NextRequest, NextResponse} from "next/server";
import {checkRouteAccess} from "@/core/server/check-route-access";

export async function proxy(req: NextRequest) {
    const {pathname} = req.nextUrl
    const {hasAccess, redirectTo} = await checkRouteAccess(pathname);
    if (!hasAccess) {
        const redirectUrl = redirectTo || '/auth';
        return NextResponse.redirect(new URL(redirectUrl, req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}