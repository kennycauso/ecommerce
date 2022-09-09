import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const PriceFilter = ({setObjFilterPrice}) => {

    const submit = e => {
        e.preventDefault() //Evita que se recargue la página
        const obj = {
            from: +e.target.fromPrice.value, //el + transforma a un number
            to: +e.target.toPrice.value,
        }
        setObjFilterPrice(obj)
    }
    return (
        <article className='home__filters-price'>
            <div className='home__filters-titles'>
                <span className='home__filters-title'>Price</span>
                <BsChevronDown className='home__filters-icon' />
            </div>
            <form onSubmit={submit} className='home__filters-box' action="">
                <div className='home__price-container'>
                    <label className='home__price-label' htmlFor="fromPrice">From</label>
                    <input className='home__price-input' type="number" id='fromPrice' />
                </div>
                <div className='home__price-container'>
                    <label className='home__price-label' htmlFor="toPrice">To</label>
                    <input className='home__price-input' type="number" id='toPrice'/>
                </div>
                <button className='home__price-btn'>Filter price</button>
            </form>
        </article>
    )
}

export default PriceFilter
