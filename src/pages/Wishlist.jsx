import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const handleCart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==product.id)
    if(existingProduct){
      alert("product quantity incrementing")
    }else{
      alert("product added to cart")
    
    }
  }



  return (
    <>
      <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
  {
    userWishlist?.length>0 ?
    <>

    <h1 className=" text-4xl font-bold text-red-600 mx-auto">My  Wishlist </h1>
    <div className="grid grid-cols-4 gap-4 mt-5">

    {
      userWishlist?.map(product=>(
        
    <div key={product?.id} className="rounded border p-2 shadow">
    <img src={product?.thumbnail} width={'100%'} height={'100%'} alt="" />

      <div className="text-center">
      <h3 className="text-xl font-bold">{product?.title}</h3>
      <div className="flex justify-evenly mt-3">
      <button
  onClick={()=>dispatch(removeItem(product?.id))}
  className="text-xl"
>
  <i className="fa-solid fa-heart-circle-xmark text-red-500"></i>
</button>

        <button onClick={()=>handleCart(product)} className="text-x1"><i className="fa-solid fa-cart-plus text-green-500"></i></button>

      </div>
      </div>
  </div>
      ))
    }




</div>

</>
:
<div className="flex flex-col justify-center items-center">
  <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
  <h1 className="text-3x1 text-red-600">your wishlist is empty </h1>
</div>
  }
    </div>
      
    </>
  )
}

export default Wishlist