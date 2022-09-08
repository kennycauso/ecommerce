import axios from 'axios'
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {

  const navigate = useNavigate()

  const handleCLick = () => {
    navigate(`/product/${product.id}`)
  }

  // Para agregar al carrito:
  const handleAddCart = e => {

    e.stopPropagation() //no se ejecuta el onClick padre, en el article

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <article onClick={handleCLick} className='card-home'>
      <header className='card-home__header'>
        <img className='card-home__img' src={product.productImgs[0]} alt="" />
      </header>
      <div className='card-home__body'>
        <div className='card-home__name-container'>
          <h3 className='card-home__name'>{product.title}</h3>
        </div>
        <div className='card-home__footer'>
          <section className='card-home__price'>
            <h4 className='card-home__price-label'>Price</h4>
            <span className='card-home__price-value'>$ {product.price}</span>
          </section>
          <button onClick={handleAddCart} className='card-home__btn'><BsFillCartPlusFill className='card-home__btn-icon'/></button>
        </div>
      </div>
    </article>
  )
}

export default CardHome
