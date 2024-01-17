import * as React from "react";
import HorizontalPlaylist from "../../components/Playlist/HorizontalPlaylist";
import VerticalPlaylist from "../../components/Playlist/VerticalPlaylist";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="pt-24 p-5">
      <div>
        <div className="text-white font-bold text-2xl">Good Afternoon</div>
        <div className="pt-5 grid grid-cols-3 gap-4">
          <HorizontalPlaylist />
        </div>
      </div>
      <div className="pt-10">
        <div className="text-white font-bold text-2xl">Made For Nail</div>
        <div className="pt-5 grid grid-cols-5 gap-3">
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
        </div>
      </div>
    </div>
  );
}
