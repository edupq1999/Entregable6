import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {
    
    const products = useSelector(state => state.products)
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setfilterByPrice] = useState({
        from: 0,
        to: Infinity
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

  return (
    <main className='home'>
        <div className='home_filters'>
            <FilterCategory />
            <FilterPrice setfilterByPrice = {setfilterByPrice} />
            <OrderByPrice />
        </div>
        <div className='products'>
        {
            products?.map(product => (
                <CardProduct 
                    key={product.id}
                    product={product}
                />
            ))
        }
        </div>
        
    </main>
  )
}

export default Home