import { useEffect, useState } from "react";
import AdminContainerBox from "../../components/containers/AdminContainerBox";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // get single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-product/${params.slug}`);
      setProduct(data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting product");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<AdminContainerBox title="Product Detail || TIMEZEN">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-slate-700 mb-10">Product Details</h2>
        
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <img
              className="rounded-lg"
              src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
              alt="watch photo"
              width={200}
              height={200}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Brand:</span>
              <span className="text-slate-600">{product.brand.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Name:</span>
              <span className="text-slate-600">{product.name}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Price:</span>
              <span className="text-slate-600">${product.price}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Model:</span>
              <span className="text-slate-600">{product.model}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Description:</span>
              <span className="text-slate-600">{product.description}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Case Size:</span>
              <span className="text-slate-600">{product.caseSize}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Dial:</span>
              <span className="text-slate-600">{product.dial}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Dial Color:</span>
              <span className="text-slate-600">{product.dialColor}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Glass Material:</span>
              <span className="text-slate-600">{product.glassMaterial}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Movement:</span>
              <span className="text-slate-600">{product.movement}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Strap Color:</span>
              <span className="text-slate-600">{product.strapColor}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Strap Material:</span>
              <span className="text-slate-600">{product.strapMaterial}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Water Resistance:</span>
              <span className="text-slate-600">{product.waterResistance}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-slate-700">Quantity:</span>
              <span className="text-slate-600">{product.quantity}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Shipping Address:</span>
              <span className="text-slate-600">{product.shippingAddress ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
    </AdminContainerBox>
  );
};

export default ProductDetail;
