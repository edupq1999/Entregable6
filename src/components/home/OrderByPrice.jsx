import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'
import './styles/orderByPrice.css'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescending = () => {
        dispatch(descendingProducts())
    }

  return (
    <div className='order_Price'>
        <h3>Order</h3>
        <button onClick={handleAscending}>- to +</button>
        <button onClick={handleDescending}>+ to -</button>
    </div>
  )
}

export default OrderByPrice