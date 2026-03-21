import React from 'react';
import {SignOutBtn} from "@/app/components/SignOutBtn";
import {mustGetSessionUser} from "@/features/auth/server/require-session";

async function HeaderAuthView() {
    const user = await mustGetSessionUser();

    return (
        <div className="relative">
            <input type="checkbox" id="user-menu" className="peer hidden" />

            <label
                htmlFor="user-menu"
                className="flex items-center gap-3 cursor-pointer select-none"
            >
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                    <p className="text-sm font-medium text-white">{user?.name}</p>
                </div>
            </label>

            <label htmlFor="user-menu" className="fixed inset-0 z-40 hidden peer-checked:block" />

            <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-700 shadow-2xl rounded-xl py-1 z-50 hidden peer-checked:block">
                {user?.email && <div className="px-4 py-3 border-b border-zinc-700">
                    <p className="text-sm text-zinc-400">{user?.email}</p>
                </div>}
                <SignOutBtn />
            </div>
        </div>
    );
}

export default HeaderAuthView;