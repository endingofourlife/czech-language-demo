import Link from "next/link";
import React from "react";

interface BackNavButtonProps {
    title?: string;
    href?: string;
}

function BackNavButton({ title = "Dashboard", href = "/dashboard" }: BackNavButtonProps) {
    return (
        <Link
            href={href}
            className="flex-1 flex items-center gap-2 md:gap-4 text-xl text-primary-text
            transition-all duration-300 ease-in-out
            hover:opacity-70
            active:opacity-50
            group"
        >
            <svg width="20" height="15" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M20.4285 6.78267H5.3646L8.96794 2.90641C9.11803 2.75047 9.23775 2.56394 9.32011 2.35769C9.40247 2.15145 9.44582 1.92962 9.44763 1.70516C9.44944 1.4807 9.40968 1.2581 9.33067 1.05035C9.25165 0.842596 9.13497 0.653851 8.98742 0.495128C8.83987 0.336405 8.66442 0.210882 8.47129 0.125883C8.27817 0.0408848 8.07124 -0.00188667 7.86258 6.38273e-05C7.65393 0.00201432 7.44772 0.0486482 7.256 0.137244C7.06427 0.22584 6.89087 0.354625 6.74591 0.516082L0.4601 7.27798C0.165498 7.59499 0 8.02489 0 8.47314C0 8.9214 0.165498 9.3513 0.4601 9.66831L6.74591 16.4302C7.04229 16.7381 7.43924 16.9085 7.85127 16.9047C8.2633 16.9008 8.65744 16.723 8.9488 16.4096C9.24016 16.0962 9.40543 15.6722 9.40901 15.229C9.41259 14.7857 9.2542 14.3587 8.96794 14.0399L5.3646 10.1636H20.4285C20.8453 10.1636 21.245 9.98551 21.5397 9.66849C21.8344 9.35146 22 8.92148 22 8.47314C22 8.0248 21.8344 7.59482 21.5397 7.2778C21.245 6.96077 20.8453 6.78267 20.4285 6.78267Z" fill="#2A2A2A"/>
            </svg>
            {title}
        </Link>
    );
}

export default BackNavButton;