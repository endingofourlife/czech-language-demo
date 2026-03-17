"use client";

import {FormProvider, useForm} from "react-hook-form";
import {NounFormData} from "@/features/nouns/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {nounSchema} from "@/features/nouns/schemas";
import {createNounAction} from "@/features/nouns/actions";
import toast from "react-hot-toast";
import FormInput from "@/app/(protected)/dashboard/_components/FormInput";

function AddNounForm() {
    const formMethods = useForm<NounFormData>({
        resolver: zodResolver(nounSchema)
    });

    async function onSubmit(data: NounFormData) {
        const actionResult = await createNounAction(data);
        if (!actionResult.success) {
            toast.error('failed to create a word');
            formMethods.setError('root', {message: actionResult.message || 'failed to create a word'});
            return;
        }
        toast.success('the word has been added successfully');
        // manually because reset() is buggy
        formMethods.resetField("word")
        formMethods.resetField("associations")
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto bg-secondary-bg border border-primary-stroke rounded-2xl px-8 py-10 flex flex-col gap-8">
                <FormInput name={"word"} label={"Word"} placeholder={"e.g., divka"} />
                <FormInput name={"associations"} label={"Associations"} placeholder={"What does it remind you of?"} />
                <button
                    type="submit"
                    disabled={formMethods.formState.isSubmitting}
                    className="w-full bg-primary-accent/80 hover:bg-primary-accent text-white font-bold text-lg py-3.5 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Create
                </button>
            </form>
        </FormProvider>
    );
}

export default AddNounForm;