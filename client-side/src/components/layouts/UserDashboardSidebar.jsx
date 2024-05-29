import logo from '../../assets/timezen-white-bg.png'
import {easeInOut, motion, useAnimationControls} from 'framer-motion'
import { FaBars} from "react-icons/fa6"
import { useState } from 'react';
import UserMenu from '../ui/userDashboaredSidebar/UserMenu';
import UserIconMenu from '../ui/userDashboaredSidebar/UserIconMenu';
import UserNavlink from '../ui/userDashboaredSidebar/UserNavlink';
import { IoIosHome } from 'react-icons/io';


const UserDashboardSidebar = () => 
{
    const [openSidebar, setOpenSidebar] = useState();
    const sidebarControls = useAnimationControls();

    const handleSidebar = () =>
    {
        setOpenSidebar(!openSidebar);
        if(openSidebar)
        {
            sidebarControls.start({x:-500, transition:{duration: 0.5}, ease: easeInOut});
        }
        else
        {
            sidebarControls.start({x:0, transition:{duration: 0.5},ease: easeInOut});
        }
    }
      
  return (
    <>
        {/* full width sidebar for larger screen */}
        <div className='lg:w-[300px] h-screen fixed left-0 top-0 bottom-0 bg-slate-950 flex flex-col justify-between'>
            <div className='lg:flex hidden flex-col px-10 text-slate-50'>
                <span className='h-20 lg:flex hidden justify-center items-center border-b-[1px] border-b-slate-600'>
                    <img src={logo} alt="logo" width={100} />
                </span>
                <UserMenu handleSidebar={handleSidebar}/>
            </div>
            <div className='lg:flex hidden flex-col px-10 text-slate-50 py-10'>
                <ul>
                <li title= "Home">
                        <UserNavlink
                        to="/">
                            <IoIosHome size={22}/> Home
                        </UserNavlink>
                    </li>
                </ul>
            </div>
        </div>


        {/* full sidebar for smaller screen */}
        <motion.div
        initial={{x:-500}}
        animate={sidebarControls} 
        className='lg:hidden w-[250px] h-screen fixed left-0 top-0 bottom-0 bg-slate-950 z-[100] flex flex-col justify-between'>
            <div className='lg:hidden flex flex-col px-5 text-slate-50 '>

                <span className='h-20 lg:hidden flex justify-start items-center gap-2 border-b-[1px] border-b-slate-600 px-3'>
                    <FaBars onClick={handleSidebar} size={24}/>
                    <img className='p-1' src={logo} alt="logo" width={100} />
                </span>
                <UserMenu handleSidebar={handleSidebar}/>
            </div>
            
            <div className='lg:hidden bottom-0 px-5 text-slate-50 py-10'>
                <ul>
                    <li title= "Home">
                        <UserNavlink
                        to="/">
                            <IoIosHome size={22}/> Home
                        </UserNavlink>
                    </li>
                </ul>
            </div>
        </motion.div>

        <div className='lg:hidden w-[80px] h-screen fixed left-0 top-0 bottom-0 bg-slate-950 text-slate-50'>
            <div className='lg:hidden flex flex-col'>
                <span className='h-20 lg:hidden flex flex-col justify-center items-center'>
                    <FaBars onClick={handleSidebar} size={24}/>
                </span>
                <div className='flex flex-col items-center'>
                    <UserIconMenu/>
                </div>
            </div>
        </div>


        <div className='lg:hidden w-[80px] fixed left-0 bottom-0 bg-slate-950 text-slate-50'>
            <div className='lg:hidden flex flex-col'>
                <div className='flex flex-col items-center py-10'>
                    <ul>
                        <li title= "Home">
                            <UserNavlink
                            to="/">
                                <IoIosHome size={22}/>
                            </UserNavlink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </>
  )
}


export default UserDashboardSidebar