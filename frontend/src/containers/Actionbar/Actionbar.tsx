import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MediaPlayer from "../../components/MediaPlayer/MediaPlayer";
import VolumeControl from "../../components/VolumeControl/VolumeControl";
import axios from "axios";
export interface IActionbarProps {}

export default function Actionbar(props: IActionbarProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songData, setSongData]: any = React.useState({});

  React.useEffect(() => {
    async function getsongData() {
      const response = await axios.get("http://127.0.0.1:8000/api/song/2/");
      setSongData(response.data);
    }
    getsongData();
  }, []);


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

  return (
    <div className="absolute bottom-0 py-3 w-full bg-black/95 flex z-50 px-5">
      <div className="flex-none text-white gap-x-3 flex flex-wrap content-center">
        {songData && songData.artist_title && songData.artist_title.length > 0 && (
          <div
            key={songData.id}
            className="h-14 flex gap-x-3 cursor-pointer group"
          >
            <div className="h-full">
              <img
                style={{ height: 60, width: 60, objectFit: "contain" }}
                className="h-full rounded-md"
                src={songData.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <div className="grow flex flex-wrap content-center text-white text-md">
                {songData.title}
              </div>
              <div className="grow flex flex-wrap text-zinc-400 text-xs">
                {songData.artist_title[0].first_name} {songData.artist_title[0].last_name}
              </div>
            </div>
            <div className="flex flex-wrap content-center">
              <FavoriteBorderIcon />
            </div>
          </div>
        )}
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
