import {
    useQuery,
    useMutation,
    UseQueryResult,
    UseMutationResult,
} from 'react-query';

import { UseApiProps, UseApiResult } from '@homework-task/types/api';

export const useApi = <TData, TBody = undefined>({
    endpoint,
    method,
    options,
    body,
}: UseApiProps<TBody>): UseApiResult<TData, TBody> => {
    const url: string = `${import.meta.env.VITE_API_URL}${endpoint}`;

    const fetchData = async (): Promise<TData> => {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Error while fetching data');
        }

        const data = (await response.json()) as TData;
        return data;
    };

    const { data, isLoading, error }: UseQueryResult<TData, Error> = useQuery<
        TData,
        Error
    >([url, options], fetchData, {
        enabled: method === 'GET',
    });

    const mutation: UseMutationResult<TData, Error, TBody> = useMutation<
        TData,
        Error,
        TBody
    >(async (postData) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(postData || body),
        });

        if (!response.ok) {
            throw new Error('Error while posting data');
        }

        return response.json() as TData;
    });

    return {
        data: method === 'GET' ? data : mutation.data,
        isLoading: method === 'GET' ? isLoading : mutation.isLoading,
        error: method === 'GET' ? error : mutation.error || null,
        mutation: method === 'POST' ? mutation : undefined,
    };
};

export default useApi;
