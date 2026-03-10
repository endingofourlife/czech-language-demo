import {getUserWordsAction} from "@/features/words/actions";
import {mustGetSessionUser} from "@/lib/auth-utils";
import PracticeSession from "@/app/practice/_components/PracticeSession";

async function Page() {
    const user = await mustGetSessionUser();
    const words = await getUserWordsAction(user.id);

    return (
        <main>
            <h1>Practice words page</h1>
            <PracticeSession words={words}/>
        </main>
    );
}

export default Page;