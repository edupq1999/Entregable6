import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../home/CardProduct'
import './styles/similarProducts.css'

const SimilarProducts = ({product}) => {

  const [categories, setCategories] = useState()
  const [idCategory, setIdCategory] = useState()
  const [similarCategory, setSimilarCategory] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (categories && product){
      const cb = category => category.name === product.category
      setIdCategory(categories.filter(cb)[0].id)
    }
  }, [categories, product])

  useEffect(() => {
    if (idCategory){
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
      axios.get(URL)
        .then(res => setSimilarCategory(res.data.data.products))
        .catch(err => console.log(err))
    }
  }, [idCategory])

  return (
    <section className='similar_products'>
      <h2 className='similar_products_title'>Similar Products:</h2>
      <div className='similar_products_container'>
        {
          similarCategory?.map(similarProduct => {
            if (product.id !== similarProduct.id){
              return <CardProduct 
                        key={similarProduct.id}
                        product = {similarProduct}
                      />
            }
          })
        }
      </div>
    </section>
  )
}

export default SimilarProducts