import { signOut } from "@/auth"

export function SignOutGoogle() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut({
                    redirectTo: "/register"
                })
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    )
}