import React from 'react';

import { TagsTable } from './components/TagsTable';

import { TagsProvider } from './context/TagContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TagsProvider>
        <div className="flex justify-center items-center min-h-screen bg-slate-200">
          <TagsTable />
        </div>
      </TagsProvider>
    </QueryClientProvider>
  );
};
