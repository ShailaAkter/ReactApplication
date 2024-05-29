import { BiSolidDashboard } from "react-icons/bi";
import AdminNavLink from "./AdminNavLink";
import { IoIosCreate,   } from "react-icons/io";
import { MdNewLabel } from "react-icons/md";
import { FaUsers } from "react-icons/fa";



const DashboardIconMenu = () => 
{
    const dashboardMenu = [
        { text: 'Dashboard', to: '/admin/dashboard', Icon: BiSolidDashboard },
        { text: 'Manage Products', to: '/admin/manageProducts', Icon: IoIosCreate },
        { text: 'Manage Brands', to: '/admin/manageBrands', Icon: MdNewLabel },
        { text: 'Users', to: '/', Icon: FaUsers },
      ];

  return (
    <ul className='py-5'>
    {
    dashboardMenu.map((item, index) => (
        <li title={item.text}
        key={index} 
        className='pt-2 flex items-center'>
            <AdminNavLink
            to={item.to}>
                <item.Icon size={22}/>
            </AdminNavLink>
        </li>
  ))}
    </ul>
  )
}

export default DashboardIconMenu