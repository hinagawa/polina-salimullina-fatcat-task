import { ReactNode } from 'react';

import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import { ZodSchema } from 'zod';

export interface FormGeneratorProps<T extends FieldValues> {
    validationSchema: ZodSchema<T>;
    useMutation: () => UseMutationResult<unknown, Error, T> | undefined;
    renderForm: (props: {
        register: ReturnType<typeof useForm<T>>['register'];
        errors: FieldErrors<T>;
    }) => ReactNode;
}
