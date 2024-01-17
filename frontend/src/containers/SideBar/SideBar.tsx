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
import PlayListitem from "../../components/PlayListitem/PlayListitem";
import { useNavigate } from "react-router-dom";

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  const handleSearch = () => {
    navigate('/search')
  }
  
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
            <ListItemText primary="Home" onClick={handleHome}/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary="Search" onClick={handleSearch} />
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
        <PlayListitem />
      </div>
    </div>
  );
}
