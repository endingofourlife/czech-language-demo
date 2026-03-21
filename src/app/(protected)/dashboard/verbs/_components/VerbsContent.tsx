import VerbList from "@/app/(protected)/dashboard/verbs/_components/VerbList";
import {getUserVerbsAction} from "@/features/verbs/actions";
import {mustGetSessionUser} from "@/features/auth/server/require-session";

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