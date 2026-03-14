"use client";

import {SyntheticEvent, useTransition} from "react";
import toast from "react-hot-toast";
import {ActionResult} from "@/types/actionResult";

interface DeleteWordFormProps {
    wordId: number;
    serverAction: (id: number) => Promise<ActionResult>;
}

function DeleteWordButton({ wordId, serverAction }: DeleteWordFormProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!confirm("Are you sure you want to delete this word?")) return;

        startTransition(async () => {
            const result = await serverAction(wordId);

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