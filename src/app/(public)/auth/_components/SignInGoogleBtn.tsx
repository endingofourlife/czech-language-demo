import ContinueWithButton from "@/app/(public)/auth/_components/ContinueWithButton";
import GoogleIcon from "@/app/(public)/auth/_components/GoogleIcon";
import {signInWithGoogle} from "@/features/auth/server/sign-in-google";

function SignInGoogleBtn() {
    return (
        <form action={signInWithGoogle} className={"mt-8"}>
            <ContinueWithButton provider={'google'} icon={<GoogleIcon />}/>
        </form>
    );
}

export default SignInGoogleBtn;