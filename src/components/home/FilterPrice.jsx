import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = event => {
        event.preventDefault()
        const from = +event.target.from.value
        const to = +event.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }

  return (
    <form onSubmit={handleSubmit} className='filter_price'>
        <h3 className='filter_title'>Price</h3>
        <div className='filter_from_to'>
            <label htmlFor="from">From</label>
            <input type="text" id='from'/>
        </div>
        <div className='filter_from_to'>
            <label htmlFor="to">To</label>
            <input type="text" id='to'/>
        </div>
        <button className='filter_button'>Filter</button>
    </form>
  )
}

export default FilterPrice