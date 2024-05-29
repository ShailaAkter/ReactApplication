import { NavLink, useNavigate } from "react-router-dom"
import {motion} from 'framer-motion'
import { FaSearch} from "react-icons/fa"
import { useSearch } from "../../hooks/searchAuth"
import axios from "axios";

const SearchInput = ({isSearchBar, setIsSearchBar}) => 
{
    const [values, setValues] = useSearch();
    const navigate = useNavigate()

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log("Form submitted"); // Debug log

        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/search-product/${values.keyword}`);
            setValues({...values, searchedProducts: data });
            navigate("/search-results");
            setIsSearchBar(false);
        }
        catch(error)
        {
            console.log(error)
        }
    }

  return (
    <motion.div 
    className="absolute  w-[500px] h-[50px] "
    initial={{y:-25, x:-420,  opacity:0}}
    animate={{y: -28, opacity:1, transition:{duration:0.2}}}>
        <form  role="search" onSubmit={handleSubmit}>
            <input 
            className="px-3 py-3 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold mr-4 w-full" 
            type="search" 
            value={values.keyword}
            onChange={(e) => setValues({...values, keyword: e.target.value})}
            placeholder="Search Watch"/>

            <button type="submit">
            </button>
        </form>
    </motion.div>
  )
}

export default SearchInput