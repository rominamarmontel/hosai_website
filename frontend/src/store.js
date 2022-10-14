import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { 
        productListReducer, 
        productDetailsReducer,
        productDeletesReducer,
        productCreateReducer,
        productUpdateReducer, } from './reducers/productReducers.js'
import { 
        userDetailsReducer, 
        userLoginReducer, 
        userRegisterReducer, 
        userUpdateProfileReducer,
        userListReducer,
        userDeleteReducer,
        userUpdateReducer, } from './reducers/userReducers'
import { 
        orderCreateReducer, 
        orderDetailsReducer,
        orderPayReducer,
        orderListMyReducer } from './reducers/orderReducers'



const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : []

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
    ? JSON.parse(localStorage.getItem('shippingAddress')) 
    : {}

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = configureStore({
reducer: {
productList: productListReducer,
productDetails: productDetailsReducer,
productDelete: productDeletesReducer,
productCreate: productCreateReducer,
cart: cartReducer,
userLogin: userLoginReducer,
userRegister: userRegisterReducer,
userDetails: userDetailsReducer,
userUpdateProfile: userUpdateProfileReducer,
userList: userListReducer,
userDelete: userDeleteReducer,
userUpdate: userUpdateReducer,
orderCreate: orderCreateReducer,
orderDetails: orderDetailsReducer,
orderPay: orderPayReducer,
orderListMy: orderListMyReducer,
productUpdate: productUpdateReducer,
}},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store