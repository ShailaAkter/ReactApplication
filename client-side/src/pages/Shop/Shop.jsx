import { useState } from "react";
import ContainerBox from "../../components/containers/ContainerBox"
import { useAuth } from "../../hooks/auth"
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/FilterData/Prices";

const Shop = () => 
{
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedPrices, setCheckedPrices] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(1);


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

    //get all products
  const getAllProducts = async() =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/get-products`);
      setProducts(data.products);
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while fetching all products!");
    }
  } 

  //filter by brands
  const handleFilter = (value, id) =>
  {
    let checkedProducts = [...checkedBrands];
    if(value)
    {
      checkedProducts.push(id);
    }
    else
    {
      checkedProducts = checkedProducts.filter((item) => item !== id);
    }
    setCheckedBrands(checkedProducts);
  }


  //get filtered product
  const getFilteredProducts = async() =>
  {
    try
    {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/product/filter-products`, {checkedBrands, checkedPrices});
      setProducts(data?.products);
      console.log(checkedBrands, data)
    }
    catch(error)
    {
      console.log(error);
      toast.error("Something went wrong while fetching filtered products!");
    }
  }

  //get total prductsCount 
  const totalProductsCount = async () =>
  {
    try
    {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/product/total-products`);
      setTotalProducts(data?.total);

    }
    catch(error)
    {
      console.log(error)
    }
  }

  useEffect(() =>
  {
    getAllBrands();
    totalProductsCount();
  }, [])
  

  useEffect(()=>
  {
    if(!checkedBrands.length && !checkedPrices.length)
    {
      getAllProducts();
    }
  },[checkedBrands.length, checkedPrices.length])

  
  useEffect(()=>
  {
    if(checkedBrands.length || checkedPrices.length)
    {
      getFilteredProducts();
    }
  },[checkedBrands, checkedPrices])


  return (
    <ContainerBox title= "TIMEZEN - Shop Your Desired Watch">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h6>Filter</h6>
          <h1>Brand</h1>
          <div className="flex flex-col">
            {brands?.map(brand => 
              (<Checkbox 
                key={brand._id} 
                onChange={(e) => handleFilter(e.target.checked, brand._id)}>
                {brand.name}
              </Checkbox>)
            )}
          </div>

          <h1>Price</h1>
          <div className="flex flex-col">
            <Radio.Group onChange={(e) => setCheckedPrices(e.target.value)}>
              {Prices?.map(item => 
                (<div key={item._id}>
                  <Radio value={item.array}>
                    {item.starRange} to {item.endRange}
                  </Radio>
                </div>)
              )}
            </Radio.Group>
          </div>

          <div className="flex flex-col">
            <button 
            onClick={() => window.location.reload()}
            className="text-left">Reset button</button>
          </div>

        </div>
        <div className="col-span-9">
          <h1 className="text-center">All Products</h1>
          {JSON.stringify(checkedBrands, null, 4)}

          <div className="flex flex-wrap">
            products
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {
                products?.map(product =>
                  (
                    <div key={product._id} >
                       <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <img
                            className="w-full"
                            src={`${import.meta.env.VITE_API_URL}/api/v1/product/product-photo/${product._id}`}
                            alt="Card"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">
                              {product.description}
                            </p>
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
                              <button 

                                title="Edit Product" 
                                className="text-red-600">
                                  <Link to={`/admin/updateProduct/${product.slug}`}> add to cart
                                  </Link>
                                  
                              </button>
                            </span>
                            <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <button 
                                           
                                title="Delete Product" 
                                className="text-red-600">
                                 details
                              </button>
                            </span>

                          </div>
                        </div>
                    </div>
                   
                  ))
              }
            </div>
          </div>

          <div>
            {totalProducts}
          </div>
        </div>
      </div>
    </ContainerBox>
  )
}

export default Shop