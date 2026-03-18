import BackNavButton from "@/components/BackNavButton";
import CircleSpinner from "@/components/CircleSpinner";
import {Suspense} from "react";
import NounQuiz from "@/app/(protected)/practice/nouns/_components/NounQuiz";

function Page() {
    return (
        <>
            <nav className="min-h-12 my-10 flex items-center">
                <BackNavButton href={"/dashboard/nouns"} title={'Nouns'} />
            </nav>
            <Suspense fallback={<CircleSpinner size={'md'} /> }>
                <NounQuiz />
            </Suspense>
        </>
    );
}

export default Page;