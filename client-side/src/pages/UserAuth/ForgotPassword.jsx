import { useState } from "react";
import ContainerBox from "../../components/containers/ContainerBox";
import RegularButton from "../../components/buttons/RegularButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => 
{
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/forgot-password`, 
            {
                email, 
            });
    
            if(res && res.data.success)
            {
                console.log(res.data);
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
            console.log(`Error in Email handleSubmit = ${error}`);
            toast.error("Something went wrong while submit Email Adress");
        }

    }
    

  return (
    <ContainerBox title="Forgot Password | TIMEZEN">
        <div className="min-h-[85vh] flex justify-center items-center">
            <div className="bg-slate-200 flex justify-center items-center rounded-xl shadow-xl p-10 max-w-2xl ">

                <form onSubmit={handleSubmit}
                className="flex flex-col w-80">
                <h2 className="text-xl font-bold text-slate-700 pb-10 text-center">Forgot Your Password?</h2>
                    <input 
                    className="w-full p-2 mb-4 text-sm rounded outline-slate-300 text-slate-700 font-semibold" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" 
                    placeholder="Enter your email"/>

                        <button type="submit"><RegularButton>Reset Password</RegularButton></button>
                </form>

            </div>
        </div>
    </ContainerBox>
  )
}

export default ForgotPassword