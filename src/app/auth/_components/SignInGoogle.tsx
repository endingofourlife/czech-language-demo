import {signIn} from "@/auth";

async function SignInGoogle() {
    return (
        <form action={async() => {
            "use server"
            await signIn("google", {redirectTo: "/dashboard"})
        }}>
            <button type="submit">Sign in with Google</button>
        </form>
    );
}

export default SignInGoogle;