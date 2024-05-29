import { Outlet } from "react-router-dom"
import UserDashboardSidebar from "./UserDashboardSidebar"

const UserDashboardLayout = () => 
{
  return (
    <div>
        <UserDashboardSidebar/>
        <Outlet/>
    </div>
  )
}

export default UserDashboardLayout