import {ReactNode} from "react";

interface WordListLayoutProps {
    children: ReactNode
}

function WordListLayout({ children}: WordListLayoutProps) {
    return (
        <ul className="flex flex-col gap-4 mt-4 w-full items-center">
            {children}
        </ul>
    );
}

export default WordListLayout;