import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../../components/UI/LikeButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import PlayButton from "../../components/UI/PlayButton";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songData, setSongData] = React.useState([]);
  const [artistData, setArtistData]: any = React.useState({});
  const { id } = useParams();

  const togglePlay = () => {
    const targetAudio = document.getElementsByClassName(
      "audioBtn"
    )[0] as HTMLAudioElement;
    if (isPlaying) {
      targetAudio.pause();
    } else {
      targetAudio.play();
    }
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    async function getArtistData() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/artist/${id}/`
      );
      setArtistData(response.data);
      setSongData(response.data.songs);
    }
    getArtistData();
  }, [id]);


  return (
    <>
      <div className="pt-16 ">
        <div className="pt-24 p-10 bg-gradient-to-b from-amber-950 to-yellow-900">
          {artistData && (
            <div key={artistData.id} className="flex gap-6 ">
              <div className="">
                <img
                  className="h-full w-60 rounded-full object-cover shadow-2xl shadow-slate-900"
                  style={{ height: 240, width: 240, objectFit: "cover" }}
                  src={artistData.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-end gap-10">
                <div>
                  <div className="text-white font-bold">Artist</div>
                  <div className="text-white font-bold text-8xl">
                    {artistData.username}
                  </div>
                </div>
                <div className="">
                  <div className="text-white">22,496,234 monthly listeners</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="flex align-baseline gap-3 pl-5 pr-5 bg-gradient-to-b from-yellow-900 items-center">
            <PlayButton />
            <LikeButton
              className={"hover:opacity-80 duration-200"}
              styles={{ fontSize: 50, color: "white" }}
            />
            <IconButton
              aria-label="favorite"
              size="large"
              className="hover:opacity-80 duration-200"
            >
              <MoreHorizIcon
                fontSize="inherit"
                style={{ fontSize: 40, color: "white" }}
              />
            </IconButton>
          </div>
          <div className="mt-4 pl-5 " style={{ width: "700px" }}>
            {songData.map((index: any) => (
              <div
                key={index.id}
                className="grid grid-cols-6 text-white/50 items-center pl-5  p-2 hover:bg-white/20 duration-100 rounded-md group"
              >
                <div className="col-span-4 flex gap-x-3 items-center">
                  <div className="group-hover:hidden w-5 pl-1">{index.id}</div>
                  <div
                    onClick={togglePlay}
                    className="hidden group-hover:block w-5"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                  </div>
                  <img
                    className="w-12 rounded-sm"
                src={index.image}
                    style={{ height: 40, width: 40, objectFit: "contain" }}
                    alt=""
                  />
                  <div>
                    <div className="text-white text-lg font-semibold">
                      {index.title}
                    </div>
                    <div>{index.artist}</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <LikeButton styles={{ color: "white", opacity: "50%" }} />
                </div>
                <div className="col-span-1">{index.duration}</div>
                <div>
                  <audio className="audioBtn" src={index.audio}></audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
