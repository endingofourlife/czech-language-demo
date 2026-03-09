"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createWordAction} from "@/app/dashboard/action";
import toast from "react-hot-toast";
import {ConjugationTypes} from "@/lib/constants";
import {wordSchema} from "@/features/words/schemas";
import {Word} from "@/features/words/types";

function AddWordForm() {
    const {register, handleSubmit, formState: {errors}, setError} = useForm<Word>({
        resolver: zodResolver(wordSchema)
    });

    async function onSubmit(data: Word){
        const result = await createWordAction(data);
        if (!result.success){
            toast.error("Failed to create a word");
            setError("root", {message: result.message || "Failed to create a word"});
        }
        toast.success("The word has been added successfully");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <strong>{errors.root?.message}</strong>
            <input type="text" {...register("infinitive")}/>
            <input type="text" {...register("associations")}/>
            <select {...register("conjugationType")}>
                {ConjugationTypes.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <button>Create</button>
        </form>
    );
}

export default AddWordForm;