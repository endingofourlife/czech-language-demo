import { signIn } from "@/auth";
import ContinueWithButton from "@/app/(public)/auth/_components/ContinueWithButton";
import GithubIcon from "@/app/(public)/auth/_components/GithubIcon";

async function SignInGithub() {
    return (
        <form action={async() => {
            "use server"
            await signIn("github", { redirectTo: "/dashboard" })
        }}>
            <ContinueWithButton provider={'gitHub'} icon={<GithubIcon/>} />
        </form>
    );
}

export default SignInGithub;