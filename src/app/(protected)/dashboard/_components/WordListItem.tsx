import {ReactNode} from "react";

interface WordListItemProps {
    children: ReactNode;
}

function WordListItem({children}: WordListItemProps) {
    return (
        <li>
            {children}
        </li>
    );
}

export default WordListItem;