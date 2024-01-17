import axios from "axios";
import * as React from "react";

export interface IPlayListitemProps {}

export default function PlayListitem(props: IPlayListitemProps) {
  const [playListData, setPlayListData] = React.useState([]);
  React.useEffect(() => {
    async function getPlayListData() {
      const response = await axios.get("http://127.0.0.1:8000/api/playlist/");
      setPlayListData(response.data);
    }
    getPlayListData();
  }, []);

  return (
    <div>
      {playListData.map((index: any) => (
        <div
          key={index.id}
          className="m-1  p-3 flex gap-2 items-center hover:bg-white/20 duration-100 rounded-md"
        >
          <div className="w-14">
            <img
              className="h-full rounded-sm"
              src={index.image}
              style={{ height: 60, width: 60, objectFit: "cover" }}
              alt=""
            />
          </div>
          <div>
            <div className="text-white">{index.title}</div>
            <div className="flex text-white/50 gap-2">
              <div>Playlist</div>
              <div>{index.author.username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
