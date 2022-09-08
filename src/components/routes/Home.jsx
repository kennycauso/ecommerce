import React from 'react'

import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import { BsChevronDown } from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'


const Home = () => {



  const products = useSelector(state => state.products)
  // console.log(products)

  return (
    <div className='home'>

      <section className='home__filters'>

        <article className='home__filters-price'>
          <div className='home__filters-titles'>
            <span className='home__filters-title'>Price</span>
            <BsChevronDown className='home__filters-icon'/>
          </div>
          <form className='home__filters-box' action="">
            <div className='home__price-container'>
              <label className='home__price-label' htmlFor="">From</label>
              <input className='home__price-input' type="text" />
            </div>
            <div className='home__price-container'>
              <label className='home__price-label' htmlFor="">To</label>
              <input className='home__price-input' type="text" />
            </div>
            <button className='home__price-btn'>Filter price</button>
          </form>
        </article>
        <article className='home__filters-category'>
          <div className='home__filters-titles'>
            <span className='home__filters-title'>Category</span>
            <BsChevronDown className='home__filters-icon'/>
          </div>
          <ul className='home__filters-lists'>
            <li className='home__cat-list'>Smart TV</li>
            <li className='home__cat-list'>Computers</li>
            <li className='home__cat-list'>Smartphones</li>
          </ul>
        </article>

      </section>

      <section className='home__container'>

        <form className='home__search-form' action="">
          <input className='home__search-input' type="text" placeholder='What are you looking for?'/>
          <button className='home__search-btn'><FiSearch className='home__search-icon'/></button>
        </form>

        <div className='home__container-card'>
          {
            products?.map(product => (
              <CardHome
              key={product.id}
              product={product}
              />
              ))
            }
        </div>
      </section>

    </div>
  )
}

export default Home
