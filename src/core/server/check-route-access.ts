import {auth} from "@/auth";

interface hasAccessResult {
    hasAccess: boolean;
    redirectTo?: string;
}

export async function checkRouteAccess(pathname: string): Promise<hasAccessResult> {
    const publicRoutes = ['/auth'];

    const session = await auth();

    // user is authenticated and trying to access the auth page
    if (session?.user && pathname === '/auth') {
        return {hasAccess: false, redirectTo: '/'};
    }

    const isPublicRoute = publicRoutes.some(route =>
        pathname === route || pathname.startsWith(route + '/')
    );

    // access is allowed for everyone
    if (isPublicRoute) {
        return {hasAccess: true};
    }

    // access is allowed only for authenticated users
    return {hasAccess: !!session?.user, redirectTo: '/auth'};
}