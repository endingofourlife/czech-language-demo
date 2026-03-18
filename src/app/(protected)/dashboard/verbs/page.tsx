import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";
import VerbsContent from "@/app/(protected)/dashboard/verbs/_components/VerbsContent";
import CircleSpinner from "@/components/CircleSpinner";
import {Suspense} from "react";
import {mustGetSessionUser} from "@/lib/auth-utils";

async function Page() {
    const user = await mustGetSessionUser();

    return (
        <>
            <DashboardNavigation currentPage={'verbs'}/>
            <Suspense fallback={<CircleSpinner size={'lg'} />}>
                <VerbsContent userId={user.id} />
            </Suspense>
        </>
    );
}

export default Page;