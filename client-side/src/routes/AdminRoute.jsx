import { useState } from "react"
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "../components/ui/Spinner";
import AdminLayout from "../components/layouts/AdminLayout";

const AdminRoute = () =>
{
    const [ok,setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    console.log(ok);

    useEffect(() =>
    {
      const authCheck = async () =>
      {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/admin-auth`);

        if(res.data.ok)
        {
          setOk(true);
        }
        else
        {
          setOk(false);
        }
      }

      if(auth?.token)
      {
        authCheck();
      }
    },[auth?.token])

  return ok ? <AdminLayout/> : <Spinner path=""/>
}


export default AdminRoute