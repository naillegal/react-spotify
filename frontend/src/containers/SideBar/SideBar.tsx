import * as React from "react";
import SpotifyLogo from "../../assets/images/SpotifyLogo.png";
import List from "@mui/material/List";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import axios from "axios";

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const [playListData, setPlayListData] = React.useState([]);
  React.useEffect(() => {
    async function getPlayListData() {
      const response = await axios.get("http://127.0.0.1:8000/api/playlist/");
      setPlayListData(response.data);
    }
    getPlayListData();
  }, []);

  console.log(playListData);

  return (
    <div className="basis-2/12 h-full bg-neutral-900">
      <div className="">
        <img src={SpotifyLogo} alt="SpotifyLogo" width={150} />
      </div>
      <div>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="text-white"
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LibraryMusicIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItemButton>
        </List>
        <Divider className="bg-neutral-600" />
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="text-white"
        >
          <ListItemButton>
            <ListItemIcon>
              <AddBoxOutlinedIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Create Playlist" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderOutlinedIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Liked Songs" />
          </ListItemButton>
          <Divider className="bg-neutral-600" />
        </List>
        {playListData.map((index: any) => (
          <div
            key={index.id}
            className="m-1  p-3 flex gap-2 items-center hover:bg-white/20 duration-100 rounded-md"
          >
            <div className="w-14">
              <img className="h-full rounded-sm" src={index.image} alt="" />
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
    </div>
  );
}
