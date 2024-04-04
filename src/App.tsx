import React from 'react';
import { TagsTable } from './components/TagsTable';

export const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <TagsTable />
    </div>
  );
};
