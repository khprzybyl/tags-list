import { useQuery } from '@tanstack/react-query';
import { fetchTags } from '../services/api';
import { useTagsContext } from '../context/TagContext';
import { TagsResponse } from '../types/types';

export const useTags = () => {
  const { page, rowsPerPage, sort } = useTagsContext();

  return useQuery<TagsResponse, Error>({
    queryKey: ['tags', page, rowsPerPage, sort],
    queryFn: () => fetchTags(page + 1, rowsPerPage, 'desc', sort),

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};
