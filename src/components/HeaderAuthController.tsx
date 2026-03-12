import React from 'react';
import {auth} from "@/auth";
import Link from "next/link";
import {SignOutBtn} from "@/components/SignOutBtn";
import { UserCircleIcon } from '@heroicons/react/24/outline';

async function HeaderAuthController() {
    const session = await auth();

    if (!session) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UserCircleIcon className="h-5 w-5" />
                    <span className="hidden sm:inline">Anonymous</span>
                </div>
                <Link
                    href='/auth'
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors shadow-sm"
                >
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>

                <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900">
                        {session.user?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                        {session.user?.email}
                    </p>
                </div>
                <SignOutBtn />
            </div>
        </div>
    );
}

export default HeaderAuthController;