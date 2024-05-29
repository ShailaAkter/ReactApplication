import { Outlet } from "react-router-dom"
import AdminSideBar from "./AdminSideBar"
import { Toaster } from "react-hot-toast"

const AdminLayout = () => 
{
  return (
    <div>
      <AdminSideBar/>
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default AdminLayout