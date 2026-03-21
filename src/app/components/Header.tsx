import React, {Suspense} from 'react';
import Link from "next/link";
import CircleSpinner from "@/app/components/CircleSpinner";
import HeaderAuthView from "@/app/components/HeaderAuthView";

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary-stroke bg-primary-bg">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/dashboard" className="flex gap-1 text-xl font-bold text-primary-text hover:text-gray-300 transition-colors">
                    <h1>DjuDju</h1> <span className="text-primary-accent hover:text-primary-accent/90">CZ</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Suspense fallback={
                        <div className="flex items-center gap-2">
                            <CircleSpinner />
                        </div>
                    }>
                        <HeaderAuthView />
                    </Suspense>
                </div>
            </nav>
        </header>
    );
}

export default Header;