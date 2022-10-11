import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : []


const initialState = {
    cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = configureStore({
reducer: {
productList: productListReducer,
productDetails: productDetailsReducer,
cart: cartReducer,
}},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store