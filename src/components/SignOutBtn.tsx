import { signOut } from "@/auth"

export function SignOutBtn() {
    return (
        <form action={async () => { "use server"; await signOut({ redirectTo: "/auth" }); }} className="w-full">
            <button
                type="submit"
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-zinc-800 hover:text-red-300 transition-colors"
            >
                Sign Out
            </button>
        </form>
    );
}