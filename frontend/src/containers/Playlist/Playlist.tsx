import * as React from "react";
import NightRain from "../../../src/assets/images/NightRain.jpg";
import PlayButton from "../../components/UI/PlayButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Divider, IconButton } from "@mui/material";
import LikeButton from "../../components/UI/LikeButton";
import SongItem from "../../components/SongItem/SongItem";

export interface IPlaylistProps {}

export default function Playlist(props: IPlaylistProps) {
  
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-800 to-slate-900">
        <div className="pt-24 p-10 ">
          <div className="flex gap-6">
            <div>
              <img
                className="h-full w-56 rounded-sm object-cover shadow-2xl shadow-slate-900"
                src={NightRain}
                style={{ height: 240, width: 240, objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-end gap-10">
              <div>
                <div className="text-white">Public Playlist</div>
                <div className="text-white font-bold text-8xl">Rap</div>
              </div>
              <div className="flex gap-3">
                <div className="text-white">Nail</div>
                <div className="text-white">50 songs, 1 hr 40 min</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-slate-900/30 items-center">
          <div className="flex align-baseline gap-3 pl-5 pr-5">
            <PlayButton />
            <LikeButton className="hover:opacity-80 duration-200" styles={{ fontSize: 50, color: "white" }} />
            <IconButton aria-label="favorite" size="large" className="hover:opacity-80 duration-200">
              <MoreHorizIcon
                fontSize="inherit"
                style={{ fontSize: 40, color: "white" }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-900 pl-2 pr-6">
        <div className="grid grid-cols-12 text-white/50 p-4">
          <div className="col-span-6"># Title</div>
          <div className="col-span-4">Genre</div>
          <div className="col-span-1"></div>
          <div className="col-span-1">Duration</div>
        </div>
      </div>
      <Divider className="bg-neutral-600" />
      <SongItem />
    </div>
  );
}
