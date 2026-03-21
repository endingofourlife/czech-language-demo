import BackNavButton from "@/app/components/BackNavButton";
import VerbQuiz from "@/app/(protected)/practice/verbs/_components/VerbQuiz";
import {Suspense} from "react";
import CircleSpinner from "@/app/components/CircleSpinner";

async function Page() {
    return (
        <>
            <nav className="min-h-12 my-10 flex items-center">
            <BackNavButton href={"/dashboard/verbs"} title={'Verbs'} />
            </nav>
            <Suspense fallback={<CircleSpinner size={'md'} /> }>
                <VerbQuiz />
            </Suspense>
        </>
    );
}

export default Page;