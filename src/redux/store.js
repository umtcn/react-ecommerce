import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'
import productSlice from './ProductSlice'
import cartSlice from './CartSlice'
import drawerReducer from './DrawerSlice'
import searchReducer from './SearchSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    drawer: drawerReducer,
    search: searchReducer
  },
})