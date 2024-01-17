import * as React from 'react';
import SongItem from '../../components/SongItem/SongItem';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';

export interface ISearchListProps {
}

export default function SearchList (props: ISearchListProps) {
  return (
    <div className='m-5'>
      <div className='text-4xl text-white font-bold pt-20'></div>
      <div>
        <SongItem />
      </div>
      <div className='text-4xl text-white font-bold pt-20'>Playlist</div>
      <div className='grid grid-cols-5 gap-4 pt-5'>
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
      </div>
    </div>
  );
}
