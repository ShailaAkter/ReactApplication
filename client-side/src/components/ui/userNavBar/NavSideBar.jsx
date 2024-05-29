import {motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { FaBars, FaEnvelope, FaFacebook, FaInstagram} from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../../hooks/auth"
import toast from "react-hot-toast";
import { IoLogOutSharp, IoLogInSharp  } from "react-icons/io5";
import { MdOutlineCreateNewFolder, MdVerifiedUser,  MdDashboard,MdAdminPanelSettings  } from "react-icons/md";
import AuthLink from './AuthLink';


const NavSideBar = ({handleHamburgerMenu, openHamburger, barControls}) => 
{
  const sidebarRef = useRef(null);
  const [auth, setAuth] = useAuth();

  const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'Shop', to: '/shop' },
    { text: 'Brands', to: '/brands' },
    { text: 'Showrooms', to: '/showrooms' },
    { text: 'Services', to: '/services' },
    { text: 'Contact', to: '/contact' }
  ];
  

  useEffect(() => 
  {
    const handleClickOutside = (event) => 
    {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) 
      {
        handleHamburgerMenu();
      }
    };

    if (openHamburger) 
    {
      document.addEventListener('mousedown', handleClickOutside);
    } else 
    {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => 
    {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openHamburger, handleHamburgerMenu]);

    //handle logout
    const handleLogout = async () =>
    {
      handleHamburgerMenu();
      setAuth({
        ...auth, user: null
      });
      localStorage.removeItem('auth');
      toast.success("Logout Successfully!");
      
    }
  

  return(
    <>
      {/* hamburger toogle button*/}
      <div className="flex justify-center items-center h-24">
        <span 
        onClick={handleHamburgerMenu} 
        className="fixed left-0 block lg:hidden px-[20px] text-slate-900 z-[1000]">
        {
          !openHamburger? 
          <FaBars size={25}/>:
          <motion.span
            initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:0.2,delay:0.5}}}
            className="text-slate-300 opacity-35">
              <IoClose size={28}/>
          </motion.span>
        }
        </span>
    </div>

      {/* open modal for side navbar*/}
      <motion.div 
      className="w-[400px] h-screen fixed left-0 top-0 bottom-0 z-[999] lg:hidden"
      initial={{ x: -500 }}
      animate={barControls}>
        <div 
        ref={sidebarRef}
        className='sticky top-0 left-0 h-screen bg-slate-950 opacity-95 text-slate-400 lg:hidden'>
          
          <h1 className='text-center pt-9 border-b border-b-slate-700 p-4'>Menu</h1>

          {/* navbar menu items*/}
          <nav className="px-[24px] py-4">
          <ul className="transition-all">
              {
                menuItems.map((item, index) => (
                <li 
                key={index} 
                className='pt-4 hover:text-slate-50'>
                  <NavLink 
                  onClick={handleHamburgerMenu} 
                  to={item.to}>
                    {item.text}
                    
                    <div className='w-10 border-b-[1px] p-2 border-b-slate-700'></div>

                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>



          {/* user auth and footer icons*/}
          <footer className="absolute bottom-0 w-full bg-slate-950 text-slate-500">

            <div className='border-t-[1px] pb-4 border-slate-700'></div>

            {
              !auth.user? 
              <ul>
                <AuthLink
                to="/login"
                onClick={handleHamburgerMenu}
                icon={IoLogInSharp}>
                  Login
                </AuthLink>

                <AuthLink
                to="/register"
                onClick={handleHamburgerMenu}
                icon={MdOutlineCreateNewFolder}>
                  Register
                </AuthLink>


              </ul>:

              <ul>
                <AuthLink
                to= "userAdmin/dashboard"
                onClick={handleHamburgerMenu}
                icon={MdVerifiedUser}>
                  {auth?.user?.firstname}
                </AuthLink>

                {
                  auth?.user?.role === 1?

                  <AuthLink
                  to= "admin/dashboard"
                  onClick={handleHamburgerMenu}
                  icon={MdAdminPanelSettings}>
                    Admin
                  </AuthLink>:

                  <AuthLink
                  to= "userAdmin/dashboard"
                  onClick={handleHamburgerMenu}
                  icon={MdDashboard}>
                    Dashboard
                  </AuthLink>
                  
                }

                <AuthLink
                to="/login"
                onClick={handleLogout}                 
                icon={IoLogOutSharp}>
                  Logout
                </AuthLink>
              </ul>
            }

            <div className='border-t-[1px] border-slate-700'></div>
            
            <div className='flex justify-between items-center px-6 py-4'>

              <NavLink 
              className="hover:scale-125 transition-all duration-300 hover:text-white" 
              onClick={handleHamburgerMenu} 
              to='facebook'>
                <FaFacebook/>
              </NavLink>

              <NavLink 
              className="hover:scale-125 transition-all duration-300 hover:text-white" 
              onClick={handleHamburgerMenu} 
              to='instagram'>
                <FaInstagram/>
              </NavLink>

              <NavLink 
              className="hover:scale-125 transition-all duration-300 hover:text-white" 
              onClick={handleHamburgerMenu} 
              to='email'>
                <FaEnvelope/>
              </NavLink>

            </div>
          </footer>
        </div>    
      </motion.div>
    </>


  )
}

export default NavSideBar