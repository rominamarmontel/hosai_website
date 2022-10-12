import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutShops from '../components/CheckoutShops'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if(!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutShops step1 step2 step3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
        <Col>
            <Form.Check 
            type='radio' 
            label='PayPal' 
            id='PayPal'
            name='paymentMethod' 
            value='Paypal' 
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>
            <Form.Check 
            type='radio' 
            label='Visa or MasterCard' 
            id='Visa or MasterCard'
            name='paymentMethod' 
            value='Visa or MasterCard' 
            checked 
            onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>
            <Form.Check 
            type='radio' 
            label='CB' 
            id='CB'
            name='paymentMethod' 
            value='CB' 
            checked 
            onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>
        </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
