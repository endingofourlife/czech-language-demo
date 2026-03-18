import VerbList from "@/app/(protected)/dashboard/verbs/_components/VerbList";
import {getUserVerbsAction} from "@/features/verbs/actions";

interface VerbsContentProps {
    userId: string;
}

async function VerbsContent({userId}: VerbsContentProps) {
    const verbs = await getUserVerbsAction(userId);
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