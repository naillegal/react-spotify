import * as React from "react";
import LikeButton from "../UI/LikeButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import axios from "axios";

export interface ISongItemProps {}

export default function SongItem(props: ISongItemProps) {
  const [songData, setSongData] = React.useState([]);
  const [playbackStates, setPlaybackStates] = React.useState<{ [key: number]: boolean }>({});
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    async function getsongData() {
      const response = await axios.get("http://127.0.0.1:8000/api/songs/");
      setSongData(response.data);
    }
    getsongData();
  }, []);

  const togglePlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    event.stopPropagation();
    const targetAudio = document.getElementById(`audioBtn-${index}`) as HTMLAudioElement;

    if (currentlyPlayingIndex === index) {
      if (playbackStates[index]) {
        targetAudio.pause();
      } else {
        targetAudio.play();
      }
    } else {
      if (currentlyPlayingIndex !== null) {
        const previousAudio = document.getElementById(`audioBtn-${currentlyPlayingIndex}`) as HTMLAudioElement;
        previousAudio.pause();
        setPlaybackStates((prevStates) => ({
          ...prevStates,
          [currentlyPlayingIndex]: false,
        }));
      }
      targetAudio.play();
      setPlaybackStates((prevStates) => ({
        ...prevStates,
        [index]: true,
      }));
      setCurrentlyPlayingIndex(index);
    }
  };

  return (
    <div>
      <div className="mt-4">
        {songData.map((index: any) => {
          const isPlaying = currentlyPlayingIndex === index.id && playbackStates[index.id];
          return (
            <div
              key={index.id}
              className="grid grid-cols-12 text-white/50 items-center pl-5 pr-5 p-2 hover:bg-white/20 duration-100 rounded-md group"
              onClick={(event) => togglePlay(event, index.id)}
            >
              <div className="col-span-6 flex gap-x-3 items-center">
                <div className="group-hover:hidden w-5 pl-1">{index.id}</div>
                <div
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
              <div className="col-span-4">{index.genres_detail[0].title}</div>
              <div className="col-span-1">
                <LikeButton styles={{ color: "white", opacity: "50%" }} />
              </div>
              <div className="col-span-1">{index.duration}</div>
              <div>
                <audio
                  id={`audioBtn-${index.id}`}
                  src={index.audio}
                  onPlay={() => setPlaybackStates((prevStates) => ({ ...prevStates, [index.id]: true }))}
                  onPause={() => setPlaybackStates((prevStates) => ({ ...prevStates, [index.id]: false }))}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
