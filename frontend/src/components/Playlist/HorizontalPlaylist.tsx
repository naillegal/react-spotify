import * as React from "react";
import PlayButton from "../UI/PlayButton";
import axios from "axios";
export interface IHorizontalPlaylistProps {}

export default function HorizontalPlaylist(props: IHorizontalPlaylistProps) {
  const [playListData, setPlayListData] = React.useState([]);
  React.useEffect(() => {
    async function getPlayListData() {
      const response = await axios.get("http://127.0.0.1:8000/api/playlist/");
      setPlayListData(response.data);
    }
    getPlayListData();
  }, []);
  return (
    <>
      {playListData.map((index: any) => (
        <div className="h-20 flex gap-x-3 align-middle bg-zinc-500/20 rounded-md hover:bg-zinc-500/50 duration-200 cursor-pointer group">
          <div className="h-full">
            <img
              className="h-full rounded-s-md"
              style={{ height: 80, width: 80, objectFit: "cover" }}
              src={index.image}
              alt=""
            />
          </div>
          <div className="grow h-full flex flex-wrap content-center text-white font-bold text-lg">
            {index.title}
          </div>
          <div className="flex flex-wrap content-center opacity-0 group-hover:opacity-100 duration-200">
            <PlayButton />
          </div>
        </div>
      ))}
    </>
  );
}
