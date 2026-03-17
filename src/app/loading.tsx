import React from 'react';
import {ScaleLoader} from "react-spinners";

function Loading() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-primary-bg text-primary-text">
            <ScaleLoader width={100} />
        </main>
    );
}

export default Loading;