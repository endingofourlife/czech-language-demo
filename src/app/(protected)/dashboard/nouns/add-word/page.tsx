import BackNavButton from "@/app/components/BackNavButton";
import React from "react";
import AddNounForm from "@/app/(protected)/dashboard/nouns/_components/AddNounForm";

function Page() {
    return (
        <>
            <nav className="min-h-12 my-10 flex items-center">
                <BackNavButton href={"/dashboard/nouns"} title={"Nouns"} />
            </nav>
            <AddNounForm />
        </>
    );
}

export default Page;