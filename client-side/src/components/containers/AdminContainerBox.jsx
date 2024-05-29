import { Helmet } from "react-helmet"

const AdminContainerBox = ({children, title}) => 
{
  return (
    <div className="w-full  pl-24 lg:pl-80 pt-10 pr-5 lg:pr-10 flex items-center justify-center mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='w-full flex items-center justify-start px-5'>
        {children}
      </div>
    </div>
  )
}

export default AdminContainerBox