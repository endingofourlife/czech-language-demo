import React from 'react';
import AddVerbForm from "@/app/(protected)/dashboard/verbs/_components/AddVerbForm";
import BackNavButton from "@/app/(protected)/dashboard/_components/BackNavButton";

function Page() {
    return (
        <main>
            <nav className="min-h-12 my-10 flex items-center">
                <BackNavButton href={"/dashboard/verbs"} />
            </nav>
            <AddVerbForm />
        </main>
    );
}

export default Page;