import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
// action return promise

export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
  const result =  await axios.get("https://dummyjson.com/products")
  // console.log(result.data.products);
  sessionStorage.setItem("all products",JSON.stringify(result.data.products))
  return result.data.products


}
)




const productSlice = createSlice({
    name: 'products',
    initialState:{
        allProducts:[],
        dummyArray:[],
        loading:false,
        errorMsg:""

    },
    reducers:{
      searchProduct : (state,actionByHeader)=>{
        state.allProducts =  state.dummyArray.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))

      }

    },
    extraReducers:(builder)=>{
      builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
        state.allProducts = apiResult.payload
        state.dummyArray = apiResult.payload
        state.loading = false
        state.errorMsg = ""

      })

      builder.addCase(fetchProducts.pending,(state)=>{
        state.allProducts = []
        state.dummyArray = []
        state.loading = true
        state.errorMsg = ""

      })

      builder.addCase(fetchProducts.rejected,(state)=>{
        state.allProducts = []
        state.dummyArray = []
        state.loading = false
        state.errorMsg = "api call failed"

      })

    }
})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer