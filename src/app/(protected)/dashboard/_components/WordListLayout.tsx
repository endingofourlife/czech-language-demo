import {ReactNode} from "react";

interface WordListLayoutProps {
    children: ReactNode
}

function WordListLayout({ children}: WordListLayoutProps) {
    return (
        <ul>
            {children}
        </ul>
    );
}

export default WordListLayout;