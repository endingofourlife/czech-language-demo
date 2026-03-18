import React from 'react';
import AddVerbForm from "@/app/(protected)/dashboard/verbs/_components/AddVerbForm";
import BackNavButton from "@/components/BackNavButton";

function Page() {
    return (
        <main>
            <nav className="min-h-12 my-10 flex items-center">
                <BackNavButton href={"/dashboard/verbs"} title={"Verbs"} />
            </nav>
            <AddVerbForm />
        </main>
    );
}

export default Page;