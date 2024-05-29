import ContainerBox from "../../components/containers/ContainerBox"
import loginCard from "../../assets/images/user-auth/login-card.jpg"
import { useEffect } from "react";
import { useState } from "react";
import RegularButton from "../../components/buttons/RegularButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import YellowButton from "../../components/buttons/YellowButton";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/auth";
import {motion} from 'framer-motion'


const Login = () => 
{
    const [dateTime, setDateTime] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();


    const navigate = useNavigate();
    const location = useLocation();

    const checkPasswordVisiblity = () =>
    {
      setShowPassword(!showPassword);
    }

    //login form validation
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, 
            {
                email, 
                password
            });
    
            if(res && res.data.success)
            {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth, 
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || '/');
            }
            else
            {
                toast.error(res.data.message);
            }
        }
        catch(error)
        {
            console.log(`Error in Login handleSubmit = ${error}`);
            toast.error("Something went wrong while submit login");
        }

    }

    useEffect(() => 
    {
        const interval = setInterval(() => 
        {
            setDateTime(new Date());
        }, 1000); // Update every second
  
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);
  
  
    const formatTime = (date) => 
    {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        return date.toLocaleTimeString(undefined, options);
    };

    const formatDate = (date) => 
    {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
  
  return (
    <ContainerBox title="Login | TIMEZEN">
        <section className="min-h-[85vh] flex justify-center items-center">

            {/* login card */}
            <div className="bg-slate-200 flex justify-center items-center rounded-xl shadow-xl p-10 max-w-3xl w-full space-x-10">

                <div className="sm:w-1/2 w-full">
                    <h2 className="text-2xl font-bold text-slate-700">Login</h2>
                    <p className="text-sm font-semibold text-slate-800 mb-8 mt-2 opacity-60">
                        Welcome to TIMZEN Watch Store
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input 
                        className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-700 font-semibold" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"/>

                        <div className="relative">
                        <input 
                        className="w-full p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" 
                        required/>
                        <span onClick={checkPasswordVisiblity} className="absolute text-slate-500 top-2 right-3"> 
                            {showPassword? <FaEye/> : <FaEyeSlash/>}
                        </span>
                        </div>

                        <button type="submit"><RegularButton>Login</RegularButton></button>
                    </form>

                    <div className="pt-10">
                        <NavLink
                        to="/forgot-password"
                        className="text-sm font-semibold text-slate-800 opacity-60 hover:text-yellow-800 hover:font-semibold">
                            Forgotten Password? 
                        </NavLink>

                        <hr className="border-slate-300 my-1" />

                        <div className="opacity-60">
                            <span className="text-sm font-semibold text-slate-800 pr-4">Don&apos;t have an account? </span> 
                            <YellowButton to="/register">Register</YellowButton>
                        </div>
                    </div>

                </div>

                <motion.div 
                className="w-1/2 relative sm:block hidden"
                initial = {{opacity: 0.8 , x: 50}}
                animate = {{opacity: 1, x: 0 , transition: {duration:2 , ease: "easeInOut"}}}>
                    <img className="rounded-lg shadow-yellow-700" src={loginCard} alt="login card image" />

                    <div className="absolute top-[48%] text-center w-[100%]">
                        <div className="text-2xl text-slate-100 font-bold">{formatTime(dateTime)}</div>
                        <div className="text-sm font-semibold text-slate-300">{formatDate(dateTime)}</div>
                    </div>
                </motion.div>
            </div>

        </section>
    </ContainerBox>
  )
}

export default Login