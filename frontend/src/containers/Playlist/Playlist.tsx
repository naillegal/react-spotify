import * as React from "react";
import NightRain from "../../../src/assets/images/NightRain.jpg";
import PlayButton from "../../components/UI/PlayButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Divider, IconButton } from "@mui/material";
import LikeButton from "../../components/UI/LikeButton";
import axios from "axios";

export interface IPlaylistProps {}

export default function Playlist(props: IPlaylistProps) {
  const [songData, setSongData] = React.useState([]);

  React.useEffect(() => {
    async function getsongData() {
      const response = await axios.get("http://127.0.0.1:8000/api/songs/");
      setSongData(response.data);
    }
    getsongData();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-800 to-slate-900">
        <div className="pt-24 p-10 ">
          <div className="flex gap-6">
            <div>
              <img
                className="h-full w-56 rounded-sm object-cover shadow-2xl shadow-slate-900"
                src={NightRain}
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
        <div className="bg-gradient-to-b from-slate-900/30">
          <div className="flex align-baseline gap-3 pl-5 pr-5">
            <PlayButton />
            <LikeButton styles={{ fontSize: 50, color: "white" }} />
            <IconButton aria-label="favorite" size="large">
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
      <div className="mt-4">
        {songData.map((index:any) => (
          <div key={index.id} className="grid grid-cols-12 text-white/50 items-center pl-5 pr-5 p-2 hover:bg-white/20 duration-100 rounded-md group">
            <div className="col-span-6 flex gap-x-3 items-center">
              <div className="group-hover:hidden w-5 pl-1">{index.id}</div>
              <div className="hidden group-hover:block w-5">
                <PlayArrowIcon />
              </div>
              <img className="w-12 rounded-sm" src={index.image} alt="" />
              <div>
                <div className="text-white text-lg font-semibold">{index.title}</div>
                <div>{index.artist}</div>
              </div>
            </div>
            <div className="col-span-4">{index.genres_detail[0].title}</div>
            <div className="col-span-1">
              <LikeButton styles={{ color: "white", opacity: "50%" }} />
            </div>
            <div className="col-span-1">{index.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
