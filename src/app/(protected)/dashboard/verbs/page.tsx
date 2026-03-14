import React from 'react';
import AddVerbForm from "@/app/(protected)/dashboard/verbs/_components/AddVerbForm";
import VerbList from "@/app/(protected)/dashboard/verbs/_components/VerbList";
import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserVerbsAction} from "@/features/verbs/actions";

async function Page() {
    const user = await mustGetSessionUser();
    const verbs = await getUserVerbsAction(user.id);

    return (
        <main>
            <AddVerbForm />
            <VerbList verbs={verbs} />
        </main>
    );
}

export default Page;