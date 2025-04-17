import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[],
    name:""
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    addTocart:(state,action)=>{
        state.cart.push(action.payload)
    }
  }
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer