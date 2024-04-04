import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useTags } from '../hooks/useTagsQuery';
import { Tag } from '../types/types';
import { formatCount, capitalizeTagName } from '../utils/format';

export const TagsDataTable = () => {
  const { isLoading, data } = useTags();
  const tags = data?.items || [];

  if (isLoading) return null; // Loader handled by parent component, or adjust as needed

  return (
    <TableContainer component={Paper} sx={{ Width: 640 }}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag: Tag) => (
            <TableRow key={tag.name}>
              <TableCell>{capitalizeTagName(tag.name)}</TableCell>
              <TableCell align="right">{formatCount(tag.count)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
