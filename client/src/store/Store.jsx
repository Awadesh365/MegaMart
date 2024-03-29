import { configureStore } from '@reduxjs/toolkit'
import productReducer from './ProductSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})