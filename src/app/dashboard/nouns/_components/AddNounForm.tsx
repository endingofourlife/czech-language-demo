"use client";

import {FormProvider, useForm} from "react-hook-form";
import {NounFormData} from "@/features/nouns/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {nounSchema} from "@/features/nouns/schemas";
import {createNounAction} from "@/features/nouns/actions";
import toast from "react-hot-toast";
import FormInput from "@/app/dashboard/_components/FormInput";

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
        formMethods.reset();
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <FormInput name={"word"} label={"word"} placeholder={"e.g., divka"} />
                <FormInput name={"associations"} label={"associations"} placeholder={"What does it remind you of?"} />
                <button
                    type="submit"
                    disabled={formMethods.formState.isSubmitting}
                >
                    Create
                </button>
            </form>
        </FormProvider>
    );
}

export default AddNounForm;