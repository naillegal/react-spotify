import React from 'react';
import Sidebar from '../containers/SideBar/SideBar';
import Navbar from '../containers/Navbar/Navbar';
import Actionbar from '../containers/Actionbar/Actionbar';

interface LayoutProps {
    children:  React.ReactNode;
}


const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className='flex h-screen w-screen'>
            <Sidebar />
            <div className='bg-neutral-800 w-full overflow-auto'>
                <Navbar />
                {props.children}
                </div>
            <Actionbar />
        </div>
    )
}

export default Layout;