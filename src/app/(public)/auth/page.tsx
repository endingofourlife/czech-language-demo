import SignInGoogleBtn from "@/app/(public)/auth/_components/SignInGoogleBtn";
import SignInGithub from "@/app/(public)/auth/_components/SignInGithub";

function Page() {
    return (
        <main className="min-h-dvh bg-primary-bg flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm text-center">
                <h1 className="font-bold text-5xl tracking-tight">
                    <span className="text-primary-text">DjuDju</span>{' '}
                    <span className="text-primary-accent">CZ</span>
                </h1>
                <p className="text-secondary-text mt-3 text-md">
                    Sign in to start learning Czech 🇨🇿
                </p>
                <SignInGoogleBtn />
                <SignInGithub />
            </div>
        </main>
    );
}

export default Page;

