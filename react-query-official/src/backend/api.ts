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
