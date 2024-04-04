import React from 'react';
import { TablePagination } from '@mui/material';
import { useTagsContext } from '../context/TagContext';
import { SortSelect } from './SelectSort';

export const SortAndPaginationHeader = () => {
  const { page, setPage, rowsPerPage, setRowsPerPage } = useTagsContext();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <SortSelect />
      <TablePagination
        component="div"
        count={-1} // Adjust based on actual data if possible
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
