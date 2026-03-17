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
        // using manually since reset() is buggy
        formMethods.resetField('infinitive');
        formMethods.resetField('associations');
        formMethods.resetField('conjugationType');
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto bg-secondary-bg border border-primary-stroke rounded-2xl px-8 py-10 flex flex-col gap-8">
                <FormInput name={"infinitive"} label={"Infinitive"} placeholder={"e.g., cist, pracovat"} />
                <FormInput name={"associations"} label={"Associations"} placeholder={"What does it remind you of?"}/>
                <FormSelect
                    name="conjugationType"
                    label="Conjugation Type"
                    options={ConjugationTypes.map(item => ({value: item, label: item}))}
                />
                <button
                    type="submit"
                    disabled={formMethods.formState.isSubmitting}
                    className="w-full bg-primary-accent/80 hover:bg-primary-accent text-white font-bold text-lg py-3.5 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {formMethods.formState.isSubmitting ? 'Creating...' : 'Create'}
                </button>
            </form>
        </FormProvider>
    );
}

export default AddVerbForm;