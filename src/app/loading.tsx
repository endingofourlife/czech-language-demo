import React from 'react';
import CircleSpinner from "@/components/CircleSpinner";

function Loading() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-primary-bg text-primary-text">
            <CircleSpinner size={30} />
        </main>
    );
}

export default Loading;