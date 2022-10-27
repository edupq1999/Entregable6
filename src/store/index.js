import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice.js'
import cart from './slices/cart.slice.js'

export default configureStore({
    reducer: {
        products,
        cart
    }
})