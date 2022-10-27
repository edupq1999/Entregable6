import React from 'react'
import './styles/cardPurchase.css'

const CardPurchase = ({purchase}) => {
  return (
    <div className='purchase_card'>
        <header className='purchase_title'>{purchase.updatedAt}</header>
        <div>
            {
                purchase.cart.products.map(product => (
                    <section key={product.id} className='purchase_products'>
                        <h3>{product.title}</h3>
                        <div>Quantity: {product.productsInCart.quantity}</div>
                        <div>price: ${product.price}</div>
                    </section>
                ))
            }
        </div>
    </div>
  )
}

export default CardPurchase