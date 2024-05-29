import { useNavigate } from "react-router-dom"
import RegularButton from "../../components/buttons/RegularButton"
import ContainerBox from "../../components/containers/ContainerBox"
import YellowButton from "../../components/buttons/YellowButton"
import registerCard from "../../assets/images/user-auth/register-card.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"


const Register = () => 
{
  const [showPassword, setShowPassword] = useState(false);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const checkPasswordVisiblity = () =>
  {
    setShowPassword(!showPassword);
  }

  //register form handling function
  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    try
    {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
      {
        firstname, 
        lastname, 
        email, 
        password, 
        phone, 
        address
      });

      if(res && res.data.success)
      {
        toast.success(res.data.message);
        navigate('/login')
      }
      else
      {
        toast.error(res.data.message);
      }
    }
    catch(error)
    {
      console.log(`Error in Register handleSubmit = ${error}`);
      toast.error("Something went wrong while submit register");
    }

  }

  return (
    <ContainerBox title="Register | TIMEZEN">
        <section className="min-h-[85vh] flex justify-center items-center">

            {/* register card */}
            <div className="bg-slate-200 flex justify-center items-center rounded-xl shadow-xl p-10 max-w-3xl w-full space-x-10">

                <div className="sm:w-1/2 w-full">
                    <h2 className="text-2xl font-bold text-slate-700">Register</h2>
                    <p className="text-sm font-semibold text-slate-800 mb-5 mt-2 opacity-60">It is quick and easy!</p>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-700 font-semibold" 
                     type="text" 
                     value={firstname}
                     onChange={(e) => setFirstname(e.target.value)}
                     placeholder="First Name"
                     required/>
                     <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                     type="text" 
                     value={lastname}
                     onChange={(e) => setLastname(e.target.value)}
                     placeholder="Last Name"
                     required/>

                     <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                     required/>

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

                     <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                     type="text" 
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     placeholder="Phone"
                     required/>

                     <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                     type="text" 
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     placeholder="Address"
                     required/>
{/* 
                     <input 
                     className="p-2 mb-4 text-sm rounded outline-slate-300 text-slate-800 font-semibold" 
                     type="text" 
                     placeholder="need to reset password"/> */}

                       <button type="submit"><RegularButton>Submit</RegularButton> </button>
                    </form>

                    <div className="pt-5">
                        <hr className="border-slate-300 my-1" />

                        <div className="opacity-60">
                            <span className="text-sm font-semibold text-slate-800 pr-4">Already have an account? </span> 
                            <YellowButton to="/login">Login</YellowButton>
                        </div>
                    </div>

                </div>

                <div className="w-1/2 relative sm:block hidden">
                    <img className="rounded-lg shadow-yellow-700" src={registerCard} alt="login card image" />
                </div>
            </div>

        </section>
    </ContainerBox>
  )
}

export default Register