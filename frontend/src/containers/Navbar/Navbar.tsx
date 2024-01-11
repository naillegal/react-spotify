import * as React from 'react';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ProfileDropDown from '../../components/NavbarComponents/ProfileDropDown';


export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
  return (
    <div className='fixed top-0 w-[85.7%] p-3 bg-slate-800 flex align-middle z-40 pr-8'>
        <div className='pt-2'>
      <NavigateBeforeOutlinedIcon className='text-white cursor-pointer hover:text-gray-400 duration-500 mr-3'/>
      <NavigateNextOutlinedIcon className='text-white cursor-pointer hover:text-gray-400 duration-500'/>
        </div>
        <div className='ml-auto'>
            <ProfileDropDown />
        </div>
    </div>
  );
}
