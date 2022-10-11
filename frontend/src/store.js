import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const middleware = [thunk]
const store = configureStore({
reducer: {
productList: productListReducer,
productDetails: productDetailsReducer,
}},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store