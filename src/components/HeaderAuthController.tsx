import React from 'react';
import {auth} from "@/auth";
import Link from "next/link";
import {SignOutBtn} from "@/components/SignOutBtn";
import { UserCircleIcon } from '@heroicons/react/24/outline';

async function HeaderAuthController() {
    const session = await auth();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay

    if (!session) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-secondary-text">
                    <UserCircleIcon className="h-5 w-5" />
                    <span className="hidden sm:inline">Anonymous</span>
                </div>
                <Link
                    href='/auth'
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-text bg-gray-900 hover:bg-gray-800 rounded-md transition-colors shadow-sm"
                >
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <div className="relative">
            <input type="checkbox" id="user-menu" className="peer hidden" />

            <label
                htmlFor="user-menu"
                className="flex items-center gap-3 cursor-pointer select-none"
            >
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                    {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                    <p className="text-sm font-medium text-white">{session.user?.name}</p>
                </div>
            </label>

            <label htmlFor="user-menu" className="fixed inset-0 z-40 hidden peer-checked:block" />

            <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-700 shadow-2xl rounded-xl py-1 z-50 hidden peer-checked:block">
                {session.user?.email && <div className="px-4 py-3 border-b border-zinc-700">
                    <p className="text-sm text-zinc-400">{session.user?.email}</p>
                </div>}
                <SignOutBtn />
            </div>
        </div>
    );
}

export default HeaderAuthController;