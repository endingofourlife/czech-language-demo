"use client";

import {SyntheticEvent, useTransition} from "react";
import {deleteWordAction} from "@/features/words/actions";
import toast from "react-hot-toast";

interface DeleteWordFormProps {
    wordId: number;
}

function DeleteWordButton({ wordId }: DeleteWordFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!confirm("Are you sure you want to delete this word?")) return;

        startTransition(async () => {
            const result = await deleteWordAction(wordId);

            if (result.success) {
                toast.success("The word has been deleted successfully");
            } else {
                toast.error(result.message || "Error deleting the word");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={isPending}>
                {isPending ? "Deleting..." : "Delete"}
            </button>
        </form>
    );

}

export default DeleteWordButton;