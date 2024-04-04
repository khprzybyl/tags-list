import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTagsContext } from '../context/TagContext';

export const SortSelect: React.FC = () => {
  const { sort, setSort } = useTagsContext();

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <FormControl
      variant="outlined"
      style={{ minWidth: 120, marginBottom: '20px' }}
    >
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        id="sort"
        value={sort}
        onChange={handleChangeSort}
        label="Sort By"
      >
        <MenuItem value="popular">Popular</MenuItem>
        <MenuItem value="activity">Activity</MenuItem>
        <MenuItem value="name">Name</MenuItem>
      </Select>
    </FormControl>
  );
};
