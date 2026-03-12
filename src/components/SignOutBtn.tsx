import { signOut } from "@/auth"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

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
            <button type="submit" className="text-black px-3 py-2 rounded-md transition-colors hover:bg-gray-200">
                <ArrowRightStartOnRectangleIcon className="h-6" />
            </button>
        </form>
    )
}