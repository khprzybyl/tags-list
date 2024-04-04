import React from 'react';
import { useTags } from '../hooks/useTagsQuery';
import { SortAndPaginationHeader } from './SortAndPaginationHeader';
import { TagsDataTable } from './TagsDataTable';

export const TagsTable = () => {
  const { isLoading, error } = useTags();

  if (isLoading) {
    return <div>Loading...</div>; // Consider using a more sophisticated loader here
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="mb-16 mt-12">
      <SortAndPaginationHeader />
      <TagsDataTable />
    </div>
  );
};
