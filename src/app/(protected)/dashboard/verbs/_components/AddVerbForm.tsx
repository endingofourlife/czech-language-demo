"use client";

import {FormProvider, useForm} from "react-hook-form";
import FormInput from "@/app/(protected)/dashboard/_components/FormInput";
import {VerbFormData} from "@/features/verbs/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {verbSchema} from "@/features/verbs/schemas";
import {FormSelect} from "@/app/(protected)/dashboard/_components/FormSelect";
import {ConjugationTypes} from "@/lib/constants";
import {createVerbAction} from "@/features/verbs/actions";
import toast from "react-hot-toast";

function AddVerbForm() {
    const formMethods = useForm<VerbFormData>({
        resolver: zodResolver(verbSchema)
    });

    async function onSubmit(data: VerbFormData){
        const actionResult = await createVerbAction(data);
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
                <FormInput name={"infinitive"} label={"infinitive"} placeholder={"e.g., cist, pracovat"} />
                <FormInput name={"associations"} label={"associations"} placeholder={"What does it remind you of?"}/>
                <FormSelect
                    name="conjugationType"
                    label="Conjugation Type"
                    options={ConjugationTypes.map(item => ({value: item, label: item}))}
                />
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

export default AddVerbForm;