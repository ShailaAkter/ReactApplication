const RegularButton = ({children, onclick}) => 
{
  return (
    <div onClick={onclick} className='p-2 bg-slate-700 hover:bg-yellow-700 rounded font-semibold text-center text-slate-50'>
        {children}
    </div>
  )
}

export default RegularButton