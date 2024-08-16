import React, { useState } from 'react';

import clsx from 'clsx';
import { z } from 'zod';

import { useApi } from '@homework-task/hooks/useApi';

import { FormGenerator } from './FormGenerator';
import { Button } from '../Button';

const customFormSchema = z.object({
    title: z
        .string()
        .min(1, 'Please, provide title')
        .max(100, 'Must be under 100 symbols'),
    body: z
        .string()
        .min(1, 'Please, provide body')
        .max(500, 'Must be under 500 symbols'),
});

type CustomFormValues = z.infer<typeof customFormSchema>;

interface PostResponseData {
    id: number;
    title: string;
    body: string;
}

export const CustomForm: React.FC = () => {
    const [charCount, setCharCount] = useState<number>(0);

    const mutation = useApi<PostResponseData, CustomFormValues>({
        endpoint: 'posts',
        method: 'POST',
    }).mutation;

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        const value = event.target.value;
        setCharCount(value.length);
    };

    return (
        <FormGenerator<CustomFormValues>
            validationSchema={customFormSchema}
            useMutation={() => mutation}
            renderForm={({ register, errors }) => (
                <>
                    <div>
                        <label
                            htmlFor="title"
                            className={clsx('block', 'font-bold', 'mb-2')}
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            className={clsx(
                                'min-w-[200px]',
                                'p-2',
                                'mb-2',
                                'border',
                                'rounded-lg'
                            )}
                            {...register('title')}
                        />
                        {errors.title && (
                            <p className={clsx('text-red', 'mt-1')}>
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="body"
                            className={clsx('block', 'font-bold', 'mb-2')}
                        >
                            Body
                        </label>
                        <textarea
                            id="body"
                            className={clsx(
                                'w-full',
                                'p-2',
                                'border',
                                'rounded-lg'
                            )}
                            placeholder="Type something..."
                            {...register('body', {
                                onChange: (
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => {
                                    handleTextareaChange(event);
                                },
                            })}
                        />
                        <div className={clsx('text-xs', 'text-gray-500')}>
                            {charCount} / 500 characters
                        </div>
                        {errors.body && (
                            <p className={clsx('text-red', 'mt-1')}>
                                {errors.body.message}
                            </p>
                        )}
                    </div>
                    <div
                        className={clsx(
                            'w-24',
                            'flex',
                            'text-center',
                            'justify-center',
                            'items-center',
                            'font-medium'
                        )}
                    >
                        <Button
                            type="submit"
                            className={clsx(
                                'disabled:opacity-40',
                                'disabled:pointer-events-none',
                                'mt-3'
                            )}
                            disabled={
                                mutation?.isLoading ||
                                Object.keys(errors).length > 0
                            }
                        >
                            Submit
                        </Button>
                    </div>
                </>
            )}
        />
    );
};
