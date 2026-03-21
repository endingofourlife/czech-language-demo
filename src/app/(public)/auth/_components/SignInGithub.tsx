import ContinueWithButton from "@/app/(public)/auth/_components/ContinueWithButton";
import GithubIcon from "@/app/(public)/auth/_components/GithubIcon";
import {signInWithGithub} from "@/features/auth/server/sign-in-github";

async function SignInGithub() {
    return (
        <form action={signInWithGithub}>
            <ContinueWithButton provider={'gitHub'} icon={<GithubIcon/>} />
        </form>
    );
}

export default SignInGithub;