
const Brands = () => 
{
  return (
    <div>Brands
    {/* <AdminContainerBox title="Manage Products || TIMEZEN">
      <div className="flex flex-col gap-8 w-full">

        <h2 className="text-2xl font-bold text-slate-700 mb-5">Manage Products</h2>
        <div>
          <SlateButton to="/admin/createProduct">Create Product</SlateButton>
        </div>

        <div>
            <h1 className='font-bold mb-6 text-slate-700 opacity-50'>All Product List</h1>

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
                                  <Link to={`/admin/updateProduct/${product.slug}`}><MdEdit/>
                                  </Link>
                                  
                              </button>
                            </span>
                            <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                              <button
                              onClick={() => showDeleteConfirm(product._id)}
                              title="Delete Product"
                              className="text-red-600">
                                <MdDelete />
                              </button>
                            </span>




                            <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <button 

                                title="View Details" 
                                className="text-red-600">
                                  <Link to={`/admin/productDetail/${product.slug}`}>
                                    <IoMdEye/>
                                  </Link>
                              </button>
                            </span>

                          </div>
                        </div>
                    </div>
                   
                  ))
              }
            </div>

        </div>

        
      </div>
      

    </AdminContainerBox> */}
    </div>
    
  )
}

export default Brands