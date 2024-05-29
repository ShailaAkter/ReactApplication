import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useEffect, useState } from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/UserAuth/Login";


const AuthenticatedRoute = ({children}) => 
{
    const [auth, setAuth] = useAuth(); 
    const [loggedIn, setLoggedIn] = useState(0);
    const navigate = useNavigate();

    useEffect(() => 
    {
        if (auth?.user) 
        {
            setLoggedIn(true);
        } 
        else 
        {
          setLoggedIn(false)
        }
      }, [auth, navigate]);
    

  return  loggedIn? <Home/> : children
}

export default AuthenticatedRoute