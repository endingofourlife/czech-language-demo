import {ReactNode} from "react";

interface WordListItemProps {
    children: ReactNode;
}

function WordListItem({children}: WordListItemProps) {
    return (
        <li className="grid grid-cols-[1fr_auto] items-center w-full bg-secondary-bg px-6 py-4 border border-primary-stroke rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-px hover:border-primary-text/30">
            {children}
        </li>
    );
}

export default WordListItem;