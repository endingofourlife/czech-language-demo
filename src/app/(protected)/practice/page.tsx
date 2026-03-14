import {getUserVerbsAction} from "@/features/verbs/actions";
import {mustGetSessionUser} from "@/lib/auth-utils";
import PracticeSession from "@/app/(protected)/practice/_components/PracticeSession";

async function Page() {
    const user = await mustGetSessionUser();
    const words = await getUserVerbsAction(user.id);

    return (
        <main>
            <h1>Practice words page</h1>
            <PracticeSession words={words}/>
        </main>
    );
}

export default Page;