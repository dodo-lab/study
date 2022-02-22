import axios from 'axios';
import {QueryKey, useInfiniteQuery, UseInfiniteQueryOptions, useQuery, UseQueryOptions} from 'react-query';

type ApiFakerResponse = {
  name: string;
};

export function useGetFaker<TData = ApiFakerResponse, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  delay: number,
  queryKey: TQueryKey,
  options?: UseQueryOptions<ApiFakerResponse, TError, TData, TQueryKey>,
) {
  return useQuery(queryKey, async () => (await axios.get('/api/faker', {params: {delay}})).data, options);
}

type ApiFakersResponse = {
  index: number;
  name: string;
}[];

export function useGetFakers<TData = ApiFakersResponse, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  delay: number,
  count: number,
  queryKey: TQueryKey,
  options?: UseInfiniteQueryOptions<ApiFakersResponse, TError, TData, ApiFakersResponse, TQueryKey>,
) {
  return useInfiniteQuery(
    queryKey,
    async ({pageParam = 0}) => (await axios.get('/api/fakers', {params: {delay, cursor: pageParam, count}})).data,
    options,
  );
}

export function useError400<TData = undefined, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  queryKey: TQueryKey,
  options?: UseQueryOptions<undefined, TError, TData, TQueryKey>,
) {
  return useQuery(queryKey, async () => await (await axios.get('/api/400')).data, options);
}
