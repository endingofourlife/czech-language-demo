import {ReactNode} from 'react';
import Header from "@/app/components/Header";

function Layout({children}: { children: ReactNode }) {
    return (
        <div className="min-h-dvh bg-primary-bg text-white">
            <Header />
            {children}
        </div>
    );
}

export default Layout;