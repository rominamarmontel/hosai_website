import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from "./reducers/orderReducers";
import {
  topicListReducer,
  topicDetailsReducer,
  topicDeleteReducer,
  topicCreateReducer,
  topicUpdateReducer,
} from "./reducers/topicReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  {
    reducer: {
      productList: productListReducer,
      productDetails: productDetailsReducer,
      productDelete: productDeleteReducer,
      productCreate: productCreateReducer,
      productUpdate: productUpdateReducer,
      productReviewCreate: productReviewCreateReducer,
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
      orderDeliver: orderDeliverReducer,
      orderListMy: orderListMyReducer,
      orderList: orderListReducer,
      topicList: topicListReducer,
      topicDetails: topicDetailsReducer,
      topicDelete: topicDeleteReducer,
      topicCreate: topicCreateReducer,
      topicUpdate: topicUpdateReducer,
    },
  },
  initialState,
  //Redux Thunkに加え、Redux DevTools Extensionも利用する場合
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
