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
        <p>
            <label htmlFor={name} className="mb-1 font-medium">{label}</label>
            <input {...register(name)} id={name} type={type} placeholder={placeholder} className="border rounded p-2"/>
            {errors[name] && (
                <span className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</span>
            )}
        </p>
    );
}

export default FormInput;