import { signIn } from "@/auth";
import ContinueWithButton from "@/app/(public)/auth/_components/ContinueWithButton";
import GoogleIcon from "@/app/(public)/auth/_components/GoogleIcon";

function SignInGoogle() {
    return (
        <form action={async() => {
            "use server"
            await signIn("google", { redirectTo: "/dashboard" })
        }} className={"mt-8"}>
            <ContinueWithButton provider={'google'} icon={<GoogleIcon />}/>
        </form>
    );
}

export default SignInGoogle;