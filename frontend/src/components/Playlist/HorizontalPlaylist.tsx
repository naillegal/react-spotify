import * as React from 'react';
import NightRain from '../../../src/assets/images/NightRain.jpg'
import PlayButton from '../UI/PlayButton';
export interface IHorizontalPlaylistProps {
}

export default function HorizontalPlaylist (props: IHorizontalPlaylistProps) {
  return (
    <div className='h-20 flex gap-x-3 align-middle bg-zinc-500/20 rounded-md hover:bg-zinc-500/50 duration-200 cursor-pointer group'>
      <div className='h-full'>
        <img className='h-full rounded-s-md' src={NightRain} alt="" />
      </div>
      <div className='grow h-full flex flex-wrap content-center text-white font-bold text-lg'>Night Rain</div>
      <div className='flex flex-wrap content-center opacity-0 group-hover:opacity-100 duration-200'>
      <PlayButton />
      </div>
    </div>
  );
}
