import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'


const ShopSubCategory = () => 
{
  return (
    <motion.div 
    className="absolute bg-white shadow-lg rounded p-5 mt-1 w-[400px] h-[300px] "
    initial={{x:-50, opacity:0}}
    animate={{x:-25, opacity:1, transition:{duration:0.5}}}>
        <ul>
            <li className="text-slate-900 hover:text-yellow-700 p-1">
              <NavLink to="shop/category1">
                Mens watch
              </NavLink>
            </li>
            <li className="text-slate-900 hover:text-yellow-700 p-1">
              <NavLink to="shop/category1">
                Mens watch
              </NavLink>
            </li>
        </ul>
    </motion.div>
  )
}

export default ShopSubCategory