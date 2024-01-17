import * as React from "react";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ProfileDropDown from "../../components/NavbarComponents/ProfileDropDown";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../../components/NavbarComponents/SearchBar";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="fixed top-0 w-[85.7%] gap-4 p-3 bg-slate-800 flex align-middle z-40 pr-8 items-center">
      <div>
        <NavigateBeforeOutlinedIcon className="text-white cursor-pointer hover:text-gray-400 duration-500 mr-3" />
        <NavigateNextOutlinedIcon className="text-white cursor-pointer hover:text-gray-400 duration-500" />
      </div>
      <div>
        <Routes>
          <Route path="/search/" element={<SearchBar />}></Route>
        </Routes>
      </div>
      <div className="ml-auto">
        <ProfileDropDown />
      </div>
    </div>
  );
}
