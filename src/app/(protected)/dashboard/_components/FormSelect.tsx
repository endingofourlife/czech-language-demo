"use client";

import { useFormContext } from "react-hook-form";

interface FormSelectProps {
    name: string;
    label: string;
    options: Array<{ value: string; label: string }>;
}

export function FormSelect({ name, label, options }: FormSelectProps) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <p className="flex flex-col gap-2">
            <label htmlFor={name} className="font-medium text-primary-text text-base">{label}</label>
            <select {...register(name)} id={name} className="w-full bg-secondary-bg border border-primary-stroke rounded-xl px-6 py-4 text-primary-text focus:outline-none focus:border-primary-text/30 transition-all appearance-none">
                <option value="">Select {label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && (
                <span className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</span>
            )}
        </p>
    );
}