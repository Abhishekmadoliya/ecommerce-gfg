import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './cartSlice'
// import { addTocart
//  } from './cartSlice'


export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})

// const export {cartSlice}