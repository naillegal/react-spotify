import * as React from 'react';
import HorizontalPlaylist from '../../components/Playlist/HorizontalPlaylist';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div className='pt-20'>
        <HorizontalPlaylist />
        
    </div>
  );
}
