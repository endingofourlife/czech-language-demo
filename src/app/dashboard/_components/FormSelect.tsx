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
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">{label}</label>
            <select {...register(name)} id={name} className="border rounded p-2">
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
        </div>
    );
}