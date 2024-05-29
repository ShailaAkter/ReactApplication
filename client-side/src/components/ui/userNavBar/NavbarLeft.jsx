import { useState } from 'react';
import Navlink from './Navlink'
import ShopSubCategory from './ShopSubCategory'

const NavbarLeft = () => 
{
    const [isShopSubmenuOpen, setIsShopSubmenuOpen] = useState(false);

  return (
    <ul className="hidden md:hidden lg:flex justify-items-center items-center space-x-4 transition-all">
        <li><Navlink to="/">Home</Navlink></li>
        <li
        onMouseEnter={() => setIsShopSubmenuOpen(true)}
        onMouseLeave={() => setIsShopSubmenuOpen(false)}>
            <Navlink to="shop">
                Shop
                {
                    isShopSubmenuOpen && 
                    <ShopSubCategory/>
                }

            </Navlink>
        </li>
        <li><Navlink to="brands">Brands</Navlink></li>
        <li><Navlink to="showrooms">Showrooms</Navlink></li>
    </ul>
  )
}

export default NavbarLeft