import { useEffect, useState } from "react"
import { BallTriangle } from "react-loader-spinner"
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({path = "login"}) => 
{
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>
    {
        const interval = setInterval(() => 
        {
            setCount((prev) => --prev)
        }, 1000);
        count === 0 && navigate(`/${path}`, {state: location.pathname});
        return () => clearInterval(interval);
    },[count, navigate, location, path])
  return (
    <>
      <div
        className="flex justify-center items-center pt-96">
          <div>
            <h1 className="text-center py-4 text-2xl text-slate-800">Redirecting to you in {count} seconds </h1>
           <div className="flex justify-center items-center opacity-50">
           <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#a16207"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}/>
           </div>
          </div>
      </div>
    </>
  )
}

export default Spinner