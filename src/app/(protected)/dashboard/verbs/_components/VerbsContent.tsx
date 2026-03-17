import VerbList from "@/app/(protected)/dashboard/verbs/_components/VerbList";
import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserVerbsAction} from "@/features/verbs/actions";

async function VerbsContent() {
    const user = await mustGetSessionUser();
    const verbs = await getUserVerbsAction(user.id);
    return (
        <>
            <h1 className="text-secondary-text uppercase tracking-wide">
                Your verbs - {verbs.length}
            </h1>
            <VerbList verbs={verbs} />
        </>
    );
}

export default VerbsContent;