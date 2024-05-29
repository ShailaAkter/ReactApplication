import { NavLink } from "react-router-dom"
import cn from "../../../utils/cn"


const Navlink = ({to, children}) => 
{
  return (
    <NavLink 
    to={to}
    className=
    {
        ({isActive}) =>
        cn("relative group hover:text-yellow-800",
        {
            "text-yellow-700" :isActive
        })
    }>
      {children}
      <div className="absolute bg-yellow-700 my-2 w-[95%] left-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
      </div>
 
    </NavLink>
  )
}

export default Navlink