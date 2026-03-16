import VerbList from "@/app/(protected)/dashboard/verbs/_components/VerbList";
import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserVerbsAction} from "@/features/verbs/actions";
import DashboardNavigation from "@/app/(protected)/dashboard/_components/DashboardNavigation";

async function Page() {
    const user = await mustGetSessionUser();
    const verbs = await getUserVerbsAction(user.id);

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <DashboardNavigation currentPage={'verbs'}/>
            <h1 className="text-secondary-text uppercase tracking-wide">Your nouns - {verbs.length}</h1>
            <VerbList verbs={verbs} />
        </main>
    );
}

export default Page;