import { useEffect, useState } from "react"
import AdminContainerBox from "../../components/containers/AdminContainerBox"
import toast from "react-hot-toast";
import axios from "axios";

import { MdEdit, MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import SlateButton from "../../components/buttons/SlateButton";
import { IoMdEye } from "react-icons/io";
import { Modal } from 'antd';



const ManageProducts = () => 
{
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () =>
  {
    try
    {
      const {data} =  await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
      setProducts(data.products);
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while fetching all products!");
    }
  }

  const handleDelete = async(id) =>
  {
    try
    {
      const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/product/delete-product/${id}`);
      if(data?.success)
        {
            toast.success(data?.message);
            getAllProducts();
        }

    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while deleting product!")
    }
  }

  const showDeleteConfirm = (productId) => 
  {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => handleDelete(productId),
    });
  }

  useEffect(() =>
  {
    getAllProducts();
  }, [])

  return (
    <AdminContainerBox title="Manage Products || TIMEZEN">
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl font-bold text-slate-700 mb-5">Manage Products</h2>
        <div>
          <SlateButton to="/admin/createProduct">Create Product</SlateButton>
        </div>
        <div>
          <h1 className="font-bold mb-6 text-slate-700 opacity-50">All Product List</h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {products?.map((product) => (
              <div key={product._id} className="card">
                <div className="card-content">
                  <img
                    className="card-image"
                    src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                    alt="Card"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 card-title">{product.name}</div>
                    <p className="text-gray-700 text-base card-description">{product.description}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {product.quantity}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {product.price}
                    </span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                      <button title="Edit Product" className="text-red-600">
                        <Link to={`/admin/updateProduct/${product.slug}`}>
                          <MdEdit />
                        </Link>
                      </button>
                    </span>
                    <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                      <button
                        onClick={() => showDeleteConfirm(product._id)}
                        title="Delete Product"
                        className="text-red-600"
                      >
                        <MdDelete />
                      </button>
                    </span>
                    <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                      <button title="View Details" className="text-red-600">
                        <Link to={`/admin/productDetail/${product.slug}`}>
                          <IoMdEye />
                        </Link>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminContainerBox>
  )
}

export default ManageProducts