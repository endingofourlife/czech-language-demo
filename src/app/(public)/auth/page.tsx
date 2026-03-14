import SignInGoogle from "@/app/(public)/auth/_components/SignInGoogle";
import SignInGithub from "@/app/(public)/auth/_components/SignInGithub";

function Page() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm text-center">
                <h1 className="font-bold text-5xl tracking-tight">
                    <span className="text-white">DjuDju</span>{' '}
                    <span className="text-[#0ed3b0]">CZ</span>
                </h1>
                <p className="text-gray-400 mt-3 text-md">
                    Sign in to start learning Czech 🇨🇿
                </p>
                <SignInGoogle />
                <SignInGithub />
            </div>
        </main>
    );
}

export default Page;

