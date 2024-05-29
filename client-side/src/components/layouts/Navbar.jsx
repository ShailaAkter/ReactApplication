import { NavLink } from "react-router-dom"
import { useState } from "react";
import {easeInOut, motion, useAnimationControls} from 'framer-motion'
import logo from '../../assets/timezen.png'
import NavbarLeft from "../ui/userNavBar/NavbarLeft"
import NavbarRight from "../ui/userNavBar/NavbarRight"
import NavSideBar from "../ui/userNavBar/NavSideBar"
import CartBox from "../ui/userNavBar/CartBox"



const Navbar = () => 
{
  const [openHamburger, setOpenHamburger] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const barControls = useAnimationControls();
  const cartControls = useAnimationControls();


  // handle hamburger toogle menu
  const handleHamburgerMenu = () =>
  {
    setOpenHamburger(!openHamburger)
    if(openHamburger)
    {
      barControls.start({x:-500, transition:{duration: 0.5}, ease: easeInOut});
    }
    else
    {
      barControls.start({x:0, transition:{duration: 0.5},ease: easeInOut});
    }
  }

  // handle toogle cart menu
  const handleCart = () => 
  {
    setOpenCart(!openCart);

    if(openCart)
    {
      const newX = window.innerWidth;
      cartControls.start({ x: newX, transition: {duration: 0.8,}});
    }
    else
    {
      const newX = 0;
      cartControls.start({ x: newX, transition: {duration: 0.8 }});
    }
  };




  return (
    <div>
      {/* side navbar for hamburger menu*/}
      <motion.header
        className="top-0 h-24 fixed w-full z-50 bg-white shadow-lg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1}}
        >

        {/* responsive navbar*/}
        <nav className="h-full max-w-[1400px] px-[20px] flex justify-center lg:justify-between items-center mx-auto relative transition-all text-[12px] uppercase tracking-widest font-bold text-slate-900">

          {/* left side menu */}
          <NavbarLeft/>   


          {/* timezen logo*/}
          <span className="w-28 md:w-40 hover:scale-105 duration-500 transition-all">
            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
          </span>


          {/* right side icons of the navbar */}
          <NavbarRight handleCart={handleCart}/>

        </nav>
      </motion.header>


      {/* Side Navbar for smaller screen*/}
      <NavSideBar 
      openHamburger={openHamburger}
      handleHamburgerMenu={handleHamburgerMenu}
      barControls = {barControls} />


      {/* cart box modal*/}
      <CartBox 
      openCart={openCart}
      handleCart={handleCart}
      cartControls={cartControls}/>
    </div>
    
  )
}

export default Navbar