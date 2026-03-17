import React from 'react';
import BackNavButton from "@/app/(protected)/dashboard/_components/BackNavButton";
import AddWordButton from "@/app/(protected)/dashboard/_components/AddWordButton";
import StartPracticeButton from "@/app/(protected)/dashboard/_components/StartPracticeButton";

type DashboardPage = "nouns" | "verbs";

interface DashboardNavigationProps {
    currentPage: DashboardPage;
}

function DashboardNavigation({ currentPage }: DashboardNavigationProps) {
    return (
        <nav className="min-h-12 grid grid-cols-2 gap-y-4 md:gap-x-4 my-10 md:flex md:items-center">
            <BackNavButton />
            <AddWordButton href={`/dashboard/${currentPage}/add-word`} />
            <div className="col-span-2 md:w-auto flex justify-center">
                <StartPracticeButton href={`/practice/${currentPage}`} />
            </div>
        </nav>
    );
}

export default DashboardNavigation;