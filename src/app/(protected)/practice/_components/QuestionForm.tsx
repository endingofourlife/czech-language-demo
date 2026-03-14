"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {checkAnswer} from "@/lib/czech-utils";
import {ConjugationType} from "@/lib/constants";

interface QuestionFormProps {
    pronoun: string;
    infinitive: string;
    conjugationType: ConjugationType;
    onNext: () => void;
}

const answerSchema = z.object({
    answer: z.string().min(1, "Answer is required").max(100, "Answer is too long")
});

export default function QuestionForm({pronoun, infinitive, conjugationType, onNext}: QuestionFormProps) {
    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof answerSchema>>({
        resolver: zodResolver(answerSchema)
    });

    function onSubmit(data: z.infer<typeof answerSchema>) {
        const isCorrect = checkAnswer(data.answer, pronoun, infinitive, conjugationType);
        if (isCorrect) {
            alert("Correct!");
        }
        onNext();
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                <label htmlFor="answer">Enter your answer:</label>
                <input id="answer"
                       type="text"
                       placeholder="Enter the conjugated form..."
                       {...register("answer")}
                />
                {errors.answer && <span>{errors.answer.message}</span>}
            </p>

            <button type="submit">Проверить</button>
    </form>
}