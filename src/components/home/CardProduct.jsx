import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({product}) => {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const infoProduct = () => {
        navigate(`/product/${product.id}`)
    }

    const addCart = event => {
        event.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
            .then(res => 
                console.log(res.data),
                dispatch(getAllProductsCart())
            )
            .catch(err => console.log(err))
    }
  return (
    <article 
        key={product.id}
        onClick={infoProduct}
        className='shop_card'>
        <header className='shop_card-header'>
            <img className='shop_card-img' src={product.productImgs[0]} alt="product_img" />
            <h1 className='shop_card-title'>{product.title}</h1>
        </header>
            <div className='shop_card-bottom'>
                <p className='shop_card-price'>$ {product.price}</p>
                <button 
                    onClick={addCart}
                    className='shop_card-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
                </button>
            </div>
    </article>
  )
}

export default CardProduct