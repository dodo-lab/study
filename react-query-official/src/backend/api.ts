import axios from 'axios';
import {QueryKey, useQuery, UseQueryOptions} from 'react-query';

export type ApiFakerResponse = {
  name: string;
};

export function useFaker<TData = ApiFakerResponse, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  delay: number,
  queryKey: TQueryKey,
  options?: UseQueryOptions<ApiFakerResponse, TError, TData, TQueryKey>,
) {
  return useQuery(queryKey, async () => (await axios.get('/api/faker', {params: {delay}})).data, options);
}

export function useError400<TData = undefined, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  queryKey: TQueryKey,
  options?: UseQueryOptions<undefined, TError, TData, TQueryKey>,
) {
  return useQuery(queryKey, async () => await (await axios.get('/api/400')).data, options);
}
