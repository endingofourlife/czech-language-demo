import NounList from "@/app/(protected)/dashboard/nouns/_components/NounList";
import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserNounsAction} from "@/features/nouns/actions";

async function NounsContent() {
    const user = await mustGetSessionUser();
    const nouns = await getUserNounsAction(user.id);

    return (
        <>
            <h1 className="text-secondary-text uppercase tracking-wide">Your nouns - {nouns.length}</h1>
            <NounList nouns={nouns}/>
        </>
    );
}

export default NounsContent;