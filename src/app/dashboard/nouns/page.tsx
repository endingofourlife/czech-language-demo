import {mustGetSessionUser} from "@/lib/auth-utils";
import {getUserNounsAction} from "@/features/nouns/actions";
import AddNounForm from "@/app/dashboard/nouns/_components/AddNounForm";
import NounList from "@/app/dashboard/nouns/_components/NounList";

async function Page() {
    const user = await mustGetSessionUser();
    const nouns = await getUserNounsAction(user.id);

    return (
        <main>
            <AddNounForm/>
            <NounList nouns={nouns}/>
        </main>
    );
}

export default Page;