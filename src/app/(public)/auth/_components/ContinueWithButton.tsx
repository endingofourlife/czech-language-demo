"use client";

import {useFormStatus} from "react-dom";
import {ReactNode} from "react";
import PulsingLoader from "@/components/PulsingLoader";

interface ContinueWithButtonProps {
    provider: "google" | "gitHub";
    icon: ReactNode;
}

function ContinueWithButton({ provider, icon }: ContinueWithButtonProps) {
    const title = provider.charAt(0).toUpperCase() + provider.slice(1);
    const {pending} = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1A1A1A] border border-primary-stroke rounded-xl text-sm text-gray-300 shadow-sm transition-all duration-200 hover:bg-[#252525] hover:border-[#3A3A3A] hover:shadow-md active:scale-[0.97]">
            {icon}
            <span className="font-medium">
                {pending ? <PulsingLoader /> : `Continue with ${title}`}
            </span>
        </button>
    );
}

export default ContinueWithButton;