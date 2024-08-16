import { UseMutationResult } from 'react-query';

export interface UseApiProps<TBody> {
    endpoint: string;
    method: 'GET' | 'POST';
    options?: RequestInit;
    body?: TBody;
}

export interface UseApiResult<TData, TBody> {
    data: TData | undefined;
    isLoading: boolean;
    error: Error | null;
    mutation?: UseMutationResult<TData, Error, TBody> | undefined;
}
