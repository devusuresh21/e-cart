import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const {id}= useParams()
  const [product,setProduct] = useState({})

  // console.log(id);

  const{allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  // console.log(product);
  

  useEffect(()=>{
    if(sessionStorage.getItem("all products")){
      const allProducts = JSON.parse(sessionStorage.getItem("all products"))
      // console.log(allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id))
      
      
    }




 

  },[])
  

  // for add to wishlist

  const handleWishlist = ()=>{
 
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product already in your wishlist")
    }else{
      alert("product added successfully")
      dispatch(addToWishlist(product))
    
    }
  }

  // for add to cart
  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product quantity incrementing")
    }else{
      alert("product added to cart")
    
    }
  }



  return (
    <>
      <Header />

      <div className='flex flex-col mx-5' >
        <div className="grid grid-cols-2 items-center h-screen">
          <img width={'350px'} height={'250px'} src={product?.thumbnail} alt="" />
          <div>
            <h3 className='font-bold'>PID: {product?.id}</h3>
            <h1 className=' text-5xl font-bold'> {product?.title}</h1>
            <h2 className="font-bold text-red-600 text-2xl">${product?.price}</h2>
            <h4>Brand : {product?.brand} </h4>
            <h4>Category : {product?.category} </h4>
            <p><span className='font-bold'> {product?.description}</span></p>

            <h3 className="font-fold">Review</h3>
            {
              product?.reviews?.length>0?
              product?.reviews?.map(item=>(
                <div key={item.date} className="shadow border-rounded p-2 mb-2">
                  <h5>
                    <span className="font-bold">{item?.reviewerName}</span>: <span>{item?.comment}</span>
                  </h5>
                  <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i>  </p>

                </div>
              ))
              :
              <div className="font-bold text-red-600">no reviews yet!!!</div>
            }
         
            <div className='flex justify-between mt-5'>
            <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>

              <button onClick={handleCart}  className='bg-green-600 rounded text-white p-2'>Add to cart</button>
            </div>
         
         
         
          </div>
        </div>


      </div>
    </>
  )
}

export default View