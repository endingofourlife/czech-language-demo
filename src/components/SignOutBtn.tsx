import { signOut } from "@/auth"

export function SignOutBtn() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut({
                    redirectTo: "/auth"
                })
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    )
}