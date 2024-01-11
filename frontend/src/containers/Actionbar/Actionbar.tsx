import * as React from "react";
import NightRain from "../../../src/assets/images/NightRain.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MediaPlayer from "../../components/MediaPlayer/MediaPlayer";
import VolumeControl from "../../components/VolumeControl/VolumeControl";
export interface IActionbarProps {}

export default function Actionbar(props: IActionbarProps) {
  return (
    <div className="absolute bottom-0 py-3 w-full bg-black/95 flex z-50 px-5">
      <div className="flex-none text-white gap-x-3">
        <div className="h-14 flex gap-x-3 cursor-pointer group">
          <div className="h-full">
            <img className="h-full rounded-md" src={NightRain} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="grow flex flex-wrap content-center text-white text-md">
              Mugamat
            </div>
            <div className="grow flex flex-wrap text-zinc-400 text-xs">
              Alim Qasimov
            </div>
          </div>
          <div className="flex flex-wrap content-center">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
      <div className="grow text-white text-center">
        <MediaPlayer />
      </div>
      <div className="grid content-center flex-none w-40 text-white">
        <VolumeControl />
      </div>
    </div>
  );
}
