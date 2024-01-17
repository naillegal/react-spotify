import * as React from 'react';
import SearchList from './SearchList';
import GenreList from './GenreList';

export interface ISearchProps {
}

export default function Search (props: ISearchProps) {
  return (
    <div>
      <SearchList />
      <GenreList />
    </div>
  );
}
