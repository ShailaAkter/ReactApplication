import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../../components/containers/ContainerBox";
import YellowButton from "../../components/buttons/YellowButton";
import RegularButton from "../../components/buttons/RegularButton";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const ResetPassword = () => 
{
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    // Split the URL by '/'

    const currentUrl = window.location.href;
    console.log(currentUrl);

    const parts = currentUrl.split('/');

    const verificationCode = parts[parts.length - 1];


    const navigate = useNavigate();

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
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/reset-password`, 
            {
                email, 
                newPassword,
                verificationCode
            });
    
            if(res && res.data.success)
            {
                toast.success(res.data && res.data.message);
                navigate('/login');
            }
            else
            {
                toast.error(res.data.message);
            }
        }
        catch(error)
        {
            console.log(`Error in Reset Password handleSubmit = ${error}`);
            toast.error("Something went wrong while submit Reset Password");
        }

    }

  return (
    <ContainerBox title="Reset Password | TIMEZEN">
        <section className="min-h-[85vh] flex justify-center items-center">

            {/* login card */}
            <div className="bg-slate-200 flex justify-center items-center rounded-xl shadow-xl p-10 max-w-2xl">

                <div className="flex flex-col w-80">
                    <h2 className="text-2xl font-bold text-slate-700 pb-10">Reset Password</h2>

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
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Password" 
                        required/>
                        <span onClick={checkPasswordVisiblity} className="absolute text-slate-500 top-2 right-3"> 
                            {showPassword? <FaEye/> : <FaEyeSlash/>}
                        </span>
                        </div>

                        <button type="submit"><RegularButton>Update Password</RegularButton></button>
                    </form>

                    <div className="pt-10">


                        <hr className="border-slate-300 my-1" />

                        <div className="opacity-60">
                            <span className="text-sm font-semibold text-slate-800 pr-4">Go Back to login page</span> 
                            <YellowButton to="/Login">Login</YellowButton>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </ContainerBox>
  )
}

export default ResetPassword