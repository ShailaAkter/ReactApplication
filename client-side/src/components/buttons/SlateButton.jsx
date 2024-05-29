import { NavLink } from 'react-router-dom'

const SlateButton = ({children, to}) => 
{
  return (
    <NavLink to={to} className="relative inline-flex items-center p-3 overflow-hidden font-semibold bg-slate-700 rounded text-slate-50 group justify-center hover:shadow-xl">

    <span className="absolute left-0 block w-full h-0 transition-all bg-slate-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>

    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">

    </span>
    <span className="relative">{children}</span>
    </NavLink>
  )
}

export default SlateButton