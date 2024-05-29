import Navlink from './Navlink'
import {FaOpencart, FaRegUser } from "react-icons/fa6"
import { FaSearch} from "react-icons/fa"
import { useState } from 'react'
import UserSubCategory from './UserSubCategory'
import SearchInput from '../../forms/SearchInput'



const NavbarRight = ({handleCart}) => 
{
  const [isUserSubmenuOpen, setIsUserSubmenuOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);

  return (
    <>

      {/* nav Icons for larger screen */}
      <div className="hidden md:hidden lg:flex justify-items-center items-center ">

          <ul className="space-x-4 flex pr-8 transition-all"> 
            <Navlink to="services">Services</Navlink>
            <Navlink to="contact">Contact</Navlink>
          </ul>

          <ul className="space-x-2 flex items-center">
            <span
            onClick={() => setIsSearchBar(true)}>
              <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
                <FaSearch size={18} title='search'/>
                {
                  isSearchBar &&
                  <SearchInput 
                  isSearchBar={isSearchBar} 
                  setIsSearchBar={setIsSearchBar}/>
                }
              </span>
            </span>

            <span 
            onMouseEnter={() => setIsUserSubmenuOpen(true)}
            onMouseLeave={() => setIsUserSubmenuOpen(false)}>
              <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
                <FaRegUser size={18}/>
                {
                  isUserSubmenuOpen && 
                  <UserSubCategory/>
                }
              </span>
            </span>
            <span 
            onClick={handleCart}
            className="hover:text-yellow-700 duration-500 transition-all">
                <FaOpencart size={22} title='cart'/>
            </span>
          </ul>

      </div>


      {/* nav Icons for smaller screen */}
      <ul className="space-x-2 flex justify-items-center items-center absolute right-5 lg:hidden">

        <span className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
          <FaSearch size={18} title='search'/>
        </span>

        <span 
        onClick={handleCart}
        className="hover:text-yellow-700 hover:scale-150 duration-500 transition-all">
          <FaOpencart size={22} title='cart'/>
        </span>

      </ul>
    </>
  )
}

export default NavbarRight