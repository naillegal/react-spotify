import * as React from "react";
import NightRain from "../../../src/assets/images/NightRain.jpg";
import PlayButton from "../UI/PlayButton";
export interface IVerticalPlaylistProps {}

export default function VerticalPlaylist(props: IVerticalPlaylistProps) {
  return (
    <div className="p-3 mb-14 rounded-md w-44 bg-zinc-800/40 hover:bg-zinc-600/20 duration-300 cursor-pointer relative group">
      <div className="w-full">
        <img className="w-full rounded-md" src={NightRain} alt="" />
      </div>
      <div className="text-white text-md font-bold pt-5">Daily Mix</div>
      <div className="text-zinc-400 text-sm pt-1">Travis Scott</div>
      <div className="absolute bottom-16 right-0.5 opacity-0 group-hover:opacity-100 group-hover:bottom-20 duration-300 cursor-pointer z-10">
          <PlayButton />
        </div>
    </div>
  );
}
