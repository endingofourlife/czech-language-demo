import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";
import VerbsContent from "@/app/(protected)/dashboard/verbs/_components/VerbsContent";
import CircleSpinner from "@/components/CircleSpinner";
import {Suspense} from "react";

async function Page() {
    return (
        <>
            <DashboardNavigation currentPage={'verbs'}/>
            <Suspense fallback={<CircleSpinner size={'lg'} />}>
                <VerbsContent />
            </Suspense>
        </>
    );
}

export default Page;