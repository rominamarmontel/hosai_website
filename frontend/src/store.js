import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, 
        userLoginReducer, 
        userRegisterReducer, 
        userUpdateProfileReducer} from './reducers/userReducers'



const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : []

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = configureStore({
reducer: {
productList: productListReducer,
productDetails: productDetailsReducer,
cart: cartReducer,
userLogin: userLoginReducer,
userRegister: userRegisterReducer,
userDetails: userDetailsReducer,
userUpdateProfile: userUpdateProfileReducer,
}},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store