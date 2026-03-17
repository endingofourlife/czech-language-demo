import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserNounsAction} from "@/features/nouns/actions";
import NounList from "@/app/(protected)/dashboard/nouns/_components/NounList";
import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";
import CircleSpinner from "@/components/CircleSpinner";
import {Suspense} from "react";

async function Page() {
    const user = await mustGetSessionUser();
    const nouns = await getUserNounsAction(user.id);

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <DashboardNavigation currentPage={'nouns'} />
            <h1 className="text-secondary-text uppercase tracking-wide">Your nouns - {nouns.length}</h1>
            <Suspense fallback={<CircleSpinner size={'lg'} />}>
                <NounList nouns={nouns}/>
            </Suspense>
        </main>
    );
}

export default Page;