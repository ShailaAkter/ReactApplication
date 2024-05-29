import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'
import { useAuth } from "../../../hooks/auth"
import toast from "react-hot-toast";
import { IoLogOutSharp, IoLogInSharp  } from "react-icons/io5";
import { MdOutlineCreateNewFolder, MdVerifiedUser, MdDashboard, MdAdminPanelSettings } from "react-icons/md";




const UserSubCategory = () => 
{
  const [auth, setAuth] = useAuth();

  //handle logout
  const handleLogout = async () =>
  {
    setAuth({
      ...auth, user: null
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully!")
  }

  return (
    <motion.div 
    className="absolute text-[12px] bg-white shadow-lg rounded p-5 w-[200px] h-[130px] "
    initial={{ x: 0, opacity:0}}
    animate={{ x:-130, opacity:1, transition:{duration:0.5}}}>
      {
        !auth.user? 
        <ul>
          <li className="text-slate-900 hover:text-yellow-700 p-1">
            <NavLink to="/login">
              <span className="flex justify-start items-center">
                <IoLogInSharp  className="pr-1" size={22}/>Login
              </span>
            </NavLink>
          </li>

          <li className="text-slate-900 hover:text-yellow-700 p-1">
            <NavLink to="/register">
              <span className="flex justify-start items-center">
                <MdOutlineCreateNewFolder className="pr-1" size={22}/>Register
              </span>
            </NavLink>
          </li>
        </ul>:

        <ul>
          <li className="text-slate-900 hover:text-yellow-700 p-1">
            <NavLink to="/userProfile">
              <span className="flex justify-start items-center">
                <MdVerifiedUser className="pr-1" size={22}/>{auth.user.firstname}
              </span>
            </NavLink>
          </li>
          {
            auth?.user?.role  === 1 ?
            <li className="text-slate-900 hover:text-yellow-700 p-1">
              <NavLink to="/admin/dashboard">
                <span className="flex justify-start items-center">
                  <MdAdminPanelSettings className="pr-1" size={22}/> Admin
                </span>
              </NavLink>
            </li>:
            <li className="text-slate-900 hover:text-yellow-700 p-1">
              <NavLink to="/userAdmin/dashboard">
                <span className="flex justify-start items-center">
                  <MdDashboard className="pr-1" size={22}/>Dashboard
                </span>
              </NavLink>
            </li>

          }

          <li className="text-slate-900 hover:text-yellow-700 p-1">
            <NavLink onClick={handleLogout} to="/login">
              <span className="flex justify-start items-center">
                <IoLogOutSharp className="pr-1" size={24}/>Logout
              </span>
            </NavLink>
          </li>
      </ul>
      }
    </motion.div>
  )
}

export default UserSubCategory