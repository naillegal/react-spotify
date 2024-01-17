import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export interface ISearchBarProps {
}

export default function SearchBar (props: ISearchBarProps) {
  return (
    <div className='w-80 flex bg-white p-2 rounded-full'>
      <div className='mr-3'>
        <SearchIcon />
      </div>
      <input type="text" className='outline-none grow' placeholder='Search' />
    </div>
  );
}
