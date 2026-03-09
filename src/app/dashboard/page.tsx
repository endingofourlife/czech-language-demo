import React from 'react';
import AddWordForm from "@/app/dashboard/_components/AddWordForm";
import WordList from "@/app/dashboard/_components/WordList";

function Page() {
    return (
        <main>
            <h1>Dashboard page</h1>
            <AddWordForm />
            <WordList />
        </main>
    );
}

export default Page;