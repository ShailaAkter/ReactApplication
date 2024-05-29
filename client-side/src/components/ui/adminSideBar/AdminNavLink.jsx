import { NavLink } from "react-router-dom"
import cn from "../../../utils/cn"

const AdminNavLink = ({to, children}) => 
{
  return (
    <NavLink 
    to={to}
    className=
    {
        ({isActive}) =>
        cn("px-3 py-2 hover:bg-slate-800 hover:text-slate-50 flex gap-2 items-center w-full rounded",
        {
            "px-3 py-2  text-yellow-600 font-semibold" : isActive
        })
    }>
      {children}
    </NavLink>
  )
}

export default AdminNavLink