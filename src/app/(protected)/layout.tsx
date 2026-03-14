import {ReactNode} from 'react';
import Header from "@/components/Header";

function Layout({children}: { children: ReactNode }) {
    return (
        <div className="container px-4 md:px-6">
            <Header />
            {children}
        </div>
    );
}

export default Layout;