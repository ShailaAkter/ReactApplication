import {motion} from 'framer-motion'
import { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5"

const CartBox = ({openCart, handleCart, cartControls}) => 
{
  const cartbarRef = useRef(null);

  useEffect(() => 
  {
    const handleClickOutside = (event) => 
    {
      if (cartbarRef.current && !cartbarRef.current.contains(event.target)) 
      {
        handleCart();
      }
    };

    if (openCart) 
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
  }, [openCart, handleCart]);

  return (
    <>
      {/* close button for cartbox*/}
      <span 
      onClick={handleCart} className="flex justify-center items-center top-8 fixed right-0 px-[20px] text-slate-900 z-[1000] hover:text-yellow-700 hover:scale-125 transition-all duration-300">
        {
          openCart &&
          <motion.span
            initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:0.2,delay:0.5}}}
            className="text-slate-900">
              <IoClose size={28}/>
          </motion.span>
        }
      </span>


      {/* cart box details*/}
      <motion.div 
      className=
      {
        `w-[400px] h-screen fixed right-0 top-0 bottom-0 z-[999] ${openCart ? "" : "-right-400"}`
      }
      initial={{ x: window.innerWidth }}
      animate={cartControls}>
        <div 
        ref={cartbarRef}
        className='sticky top-0 right-0 h-screen bg-slate-50 text-slate-900 shadow-lg'>

          <div className="">
            <nav className="px-[20px]">

              <div className="flex justify-between items-center">
                <span>dhur</span>
              </div>

            </nav>
          </div>
        </div>
      </motion.div>
    </>

  )
}

export default CartBox