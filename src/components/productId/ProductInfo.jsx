import React, { useState } from 'react'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)
    
    const handleMinus = () => {
        if (counter - 1 > 0){
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }
  return (
    <div className='product-info'>
        <h2 className='product_info-title'>{product?.title}</h2>
        <p className='product_info-description'>{product?.description}</p>
        <footer className='product_info-footer'>
            <div className='product_info-price-container'>
                <h3 className='product_info-price-label'>Price</h3>
                <span className='product_info-price-number'>{product?.price}</span>
            </div>
            <div className='product_info-quatity-container'>
                <h3 className='product_info-quatity-label'>Quantity</h3>
                <div onClick={handleMinus} className='counter_minus'>-</div>
                <div className='counter_number'>{counter}</div>
                <div onClick={handlePlus} className='counter_plus'>+</div>
            </div>
            <button className='product_info-btn'>Add to Cart <i className="product_info-icon fa-solid fa-cart-shopping"></i></button>
        </footer>
    </div>
  )
}

export default ProductInfo