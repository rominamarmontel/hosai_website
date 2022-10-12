import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
            orderItems, 
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice,} = req.body

if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
} else {
    const order = new Order({
        orderItems, 
        shippingAddress, 
        user: req.user._id,
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
    })

    const createOrder = await order.save()

    res.status(201).json(createOrder)
}
})

export {
    addOrderItems
}