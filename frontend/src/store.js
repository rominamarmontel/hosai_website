import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers.js'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    productList: productListReducer
})

const store = configureStore({
    reducer: reducer,
    preloadedState: {},
    middleware: [thunk],
})
 
export default store