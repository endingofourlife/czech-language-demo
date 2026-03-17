"use client";

import {useFormContext} from "react-hook-form";

interface FormInputProps {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}

function FormInput({ name, label, type = "text", placeholder }: FormInputProps) {
    const {register, formState: {errors}} = useFormContext();

    return (
        <p className="flex flex-col gap-2">
            <label htmlFor={name} className="font-medium text-primary-text text-base">{label}</label>
            <input
                {...register(name)}
                id={name}
                type={type}
                placeholder={placeholder}
                className="w-full bg-secondary-bg border border-primary-stroke rounded-xl px-6 py-4 text-primary-text placeholder:text-primary-text/50 focus:outline-none focus:border-primary-text/30 transition-all"
            />
            {errors[name] && (
                <span className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</span>
            )}
        </p>
    );
}

export default FormInput;