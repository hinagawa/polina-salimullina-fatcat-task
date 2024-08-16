import { useCallback, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { FormGeneratorProps } from '@homework-task/types/form';

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    useMutation,
    renderForm,
}: FormGeneratorProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
        mode: 'onChange',
    });
    const [message, setMessage] = useState('');
    const mutation = useMutation();

    const handleFormSubmit: SubmitHandler<T> = useCallback(
        (formData): void => {
            mutation?.mutate(formData, {
                onSuccess: () => {
                    setMessage('Form was submitted.');
                },
                onError: () => {
                    setMessage('Error occurred. Please try again.');
                },
            });
        },
        [mutation]
    );

    return (
        <>
            <form
                onSubmit={(event) => void handleSubmit(handleFormSubmit)(event)}
                className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'justify-center'
                )}
            >
                {renderForm({ register, errors })}
                <p>{message}</p>
            </form>
        </>
    );
};
