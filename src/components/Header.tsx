import React, {Suspense} from 'react';
import Link from "next/link";
import HeaderAuthController from "@/components/HeaderAuthController";
import {CircleLoader} from "react-spinners";

function Header() {
    const navItems = [
        { name: 'home', href: '/' },
        { name: 'practice', href: '/practice' },
        { name: 'dashboard', href: '/dashboard' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                    DjuDju2
                </Link>

                <ul className="hidden sm:flex items-center gap-1">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all capitalize"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    <Suspense fallback={
                        <div className="flex items-center gap-2">
                            <CircleLoader size={24} color="#6B7280" />
                            <span className="text-sm text-gray-500">Loading...</span>
                        </div>
                    }>
                        <HeaderAuthController />
                    </Suspense>
                </div>
            </nav>
        </header>
    );
}

export default Header;