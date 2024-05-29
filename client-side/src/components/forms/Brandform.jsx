import AdminButton from "../buttons/AdminButton"

const Brandform = ({value, setValue, handleSubmit}) => 
{
  return (
    <form onSubmit={handleSubmit} className="">
        <input 
        className="p-3 mb-4 text-sm border-2 border-slate-400 rounded outline-slate-600 text-slate-700 font-semibold mr-4 w-full" 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter brand name"/>

        <button type="submit"><AdminButton>Submit</AdminButton></button>
    </form>
  )
}

export default Brandform