import { configureStore } from '@reduxjs/toolkit'
import { productosSlice } from './slice/productos/productosSlice'

export const store = configureStore({
  reducer: {
    productos: productosSlice.reducer,

  },
})