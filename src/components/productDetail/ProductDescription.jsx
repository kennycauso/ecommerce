import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({ productInfo }) => {
    const [counter, setCounter] = useState(1)
    const hanndlePlus = () => setCounter(counter + 1)
    const hanndleMinus = () => {
        if (counter - 1 >= 1) setCounter(counter - 1)
    }

const handleAddCart = () => {
    const URL= `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    const obj = {
        id: productInfo.id,
        quantity: counter
    }
    axios.post(URL, obj, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

    return (
        <section className='product-info'>

            <div className='product-info__imgs'>
                <img className='product-info__img' src={productInfo?.productImgs[0]} alt="" />
            </div>

            <div className='product-info__container'>
                <h2 className='product-info__name>'>{productInfo?.title}</h2>
                <p className='product-info__description'>{productInfo?.description}</p>
                <div className='product-info__options'>
                    <div className='product-info__body'>
                        <article className='product-info__price'>
                            <h3 className='product-info__price-label'>Price</h3>
                            <span className='product-info__price-value'>{productInfo?.price}</span>
                        </article>
                        <article className='product-info__quantity'>
                            <h3 className='product-info__quantity-label'>Quantity</h3>
                            <div className='product-info__quantity-product'>
                                <button className='product-info__btn-counter' onClick={hanndleMinus}>-</button>
                                <div className='product-info__counter'>{counter}</div>
                                <button className='product-info__btn-counter' onClick={hanndlePlus}>+</button>
                            </div>
                        </article>
                    </div>
                    <button onClick={handleAddCart} className='product-info__btn-addCart'>Add to Cart <AiOutlineShoppingCart /></button>
                </div>
            </div>

        </section>
    )
}

export default ProductDescription
