import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data),
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }
  return (
    <article className='cart_product'>
        <h2 className='cart_product_title'>{product.title}</h2>
        <ul className='cart_product_info'>
            <li className='cart_product_price'><span>Price: </span>$ {product.price*product.productsInCart.quantity}</li>
            <li className='cart_product_quatity'><span>Quantity: </span>{product.productsInCart.quantity}</li>
        </ul>
        <button className='cart_product_delete' onClick={handleDelete}>Delete</button>
    </article>
  )
}

export default CartProduct