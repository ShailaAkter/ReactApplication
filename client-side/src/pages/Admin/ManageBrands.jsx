import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminContainerBox from "../../components/containers/AdminContainerBox";
import { MdDelete, MdEdit } from "react-icons/md";
import Brandform from "../../components/forms/Brandform";
import { Modal } from 'antd';


const ManageBrands = () => 
{
    const [brands, setBrands] = useState([]);
    const [brandName, setBrandName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [updatedName, setUpdatedName] = useState("");

    //create brand 
    const handleSubmit = async(e) =>
    {
        e.preventDefault();

        try
        {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/brand/create-brand`, {name: brandName});

            if(data?.success)
            {
                toast.success(data?.message);
                getAllBrands();
                setBrandName("")
            }
            else
            {
                toast.error(data?.message);
            }
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while creating brand!");
        }
    }

    //get all brands
    const getAllBrands = async () =>
    {
        try
        {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brand/all-brands`);
            if(data?.success)
            {
                setBrands(data.brands);
            }
        }
        catch(error)
        {
            console.log(error);
            toast.error("Something went wrong while getting Brand")
        }
    }
    
    //update brand
    const handleUpdate = async (e) =>
    {
        e.preventDefault();
        try
        {
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/brand/update-brand/${selected._id}`, {name: updatedName});
            if(data?.success)
            {
                toast.success(data?.message);
                setSelected(null);
                setUpdatedName("");
                setIsModalOpen(false);
                getAllBrands();
            }
            else
            {
                toast.error(data?.message);
            }
        }
        catch(error) 
        {
            console.log(error);
            toast.error("Something went wrong while updating Brand");
        }
    }


    //delete brand
    const handleDelete = async (id) =>
    {
        try
        {
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/brand/delete-brand/${id}`);
            if(data?.success)
            {
                toast.success(data?.message);
                getAllBrands();
            }
            else
            {
                toast.error(data?.message);
            }
        }
        catch(error) 
        {
            console.log(error);
            toast.error("Something went wrong while deleting Brand");
        }
    }

    useEffect(() =>
    {
        getAllBrands();
    }, [])

  return (
    <AdminContainerBox title="Manage Brands || TIMEZEN">
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold text-slate-700">Manage Brands</h2>

            <div>
                <Brandform 
                handleSubmit={handleSubmit} 
                value={brandName}
                setValue={setBrandName}/>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm">
                            <thead className="border-b-2 border-slate-400 font-medium text-slate-700">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Brand Name</th>
                                    <th scope="col" className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                brands?.map((item, index) =>
                                (
                                    <tr key={item._id} className="border-b border-slate-300 transition duration-300 ease-in-out hover:bg-slate-100 text-slate-700 font-semibold">
                                        <td className="whitespace-nowrap px-6 py-4">{index+1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 flex justify-start items-center gap-4">
                                            <button 
                                            onClick={() => 
                                            {
                                                setIsModalOpen(true);
                                                setUpdatedName(item.name);
                                                setSelected(item);
                                            }}
                                            title="Edit" 
                                            className="text-slate-800"><MdEdit/></button>
                                            <button 
                                            onClick={() =>
                                            {
                                                handleDelete(item._id)
                                            }}
                                            title="Delete" 
                                            className="text-red-600"><MdDelete/></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                    </div>

                    {/* modal for edit brand */}
                    <Modal 
                    onCancel={() => setIsModalOpen(false)} 
                    footer={null}
                    open = {isModalOpen}>
                        <div className="p-10">
                            <Brandform 
                            value={updatedName}
                            setValue={setUpdatedName}
                            handleSubmit={handleUpdate}/>
                        </div>
                    </Modal>


                    </div>
                </div>
            </div>
        </div>
    </AdminContainerBox>
  )
}

export default ManageBrands