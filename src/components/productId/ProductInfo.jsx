import React, { useState } from 'react'
import './styles/productInfo.css'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)
    const [img, setImg] = useState(0)
    
    const handleMinus = () => {
        if (counter - 1 > 0){
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const backImg = () => {
        if (img>0){
            setImg(img-1)
        }
    }

    const nextImg = () => {
        if (img<product.productImgs.length-1){
            setImg(img+1)
        }
    }
  return (
    <div className='product-info'>
        <div className='product-info-container'>
            <h2 className='product_info-title'>{product?.title}</h2>
            <div className='product_info-img_container'>
                <img className='product_info-img' src={product?.productImgs[img]} alt="product_img" />
                <span onClick={backImg} className='product_button product_back cursor'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></span>
                <span onClick={nextImg} className='product_button product_next cursor'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></span>
            </div>
        </div>
        <section className='product_info-section'>
        <h2>Characteristics: </h2>
        <p className='product_info-description'>{product?.description}</p>
            <div className='product_info-price-container'>
                <h3 className='product_info-price-label'>Price</h3>
                <span className='product_info-price-number'>$ {product?.price}</span>
            </div>
            <div className='product_info-quatity-container'>
                <h3 className='product_info-quatity-label'>Quantity</h3>
                <div className='button_container'>
                    <div onClick={handleMinus} className='counter_minus cursor'>-</div>
                    <div className='counter_number'>{counter}</div>
                    <div onClick={handlePlus} className='counter_plus cursor'>+</div>
                </div>
            </div>
            <button className='product_info-btn'>Add to Cart <i className="product_info-icon fa-solid fa-cart-shopping"></i></button>
        </section>
    </div>
  )
}

export default ProductInfo