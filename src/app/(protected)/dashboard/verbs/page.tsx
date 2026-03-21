import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";
import VerbsContent from "@/app/(protected)/dashboard/verbs/_components/VerbsContent";
import {Suspense} from "react";
import CircleSpinner from "@/app/components/CircleSpinner";

async function Page() {
    return (
        <main>
            <DashboardNavigation currentPage={'verbs'}/>
            <Suspense fallback={<CircleSpinner size={'lg'} />}>
                <VerbsContent />
            </Suspense>
        </main>
    );
}

export default Page;