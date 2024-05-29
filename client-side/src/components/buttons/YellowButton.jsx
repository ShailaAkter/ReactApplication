import { NavLink } from 'react-router-dom'

const YellowButton = ({to, children}) => 
{
  return (
    <NavLink to={to} className="relative inline-flex items-center px-3 py-2 overflow-hidden font-semibold border border-yellow-700 rounded text-yellow-700 hover:text-slate-50 group justify-center hover:shadow-xl text-sm">

    <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease-in-out"></span>

    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">

    </span>
    <span className="relative">{children}</span>
    </NavLink>
  )
}

export default YellowButton