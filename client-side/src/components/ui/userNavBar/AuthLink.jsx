import { NavLink } from 'react-router-dom'

const AuthLink = ({to,children, onClick, icon: Icon}) => 
{
  return (
    <li
    onClick={onClick} 
    className="px-5 pb-4 hover:text-slate-50">
        <NavLink  
        to={to}>
        <span className="flex justify-start items-center">
        {
            Icon && <Icon className="pr-1" size={22} />
        } 
            {children}
        </span>
        </NavLink>
    </li>
  )
}

export default AuthLink