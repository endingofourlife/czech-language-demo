import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";
import CircleSpinner from "@/components/CircleSpinner";
import {Suspense} from "react";
import NounsContent from "@/app/(protected)/dashboard/nouns/_components/NounsContent";

async function Page() {
    return (
        <main>
            <DashboardNavigation currentPage={'nouns'} />
            <Suspense fallback={<CircleSpinner size={'lg'} />}>
                <NounsContent />
            </Suspense>
        </main>
    );
}

export default Page;