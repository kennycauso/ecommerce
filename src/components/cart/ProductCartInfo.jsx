import axios from 'axios';
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import getConfig from '../../utils/getConfig';

const ProductCartInfo = ({ product, getAllProductsCart }) => {

    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
        axios.delete(URL, getConfig())
            .then(() => getAllProductsCart())
            .catch(err => console.log(err))
    }

    return (
        <article className='cart__item'>

            <header className='cart__item-header'>
                <div className='cart__item-header-box'>
                    <h4 className='cart__category'>{product.brand}</h4>
                    <h3 className='cart__name'>{product.title}</h3>
                </div>
                <BsTrash onClick={handleDeleteProduct} className='cart__trash' />
            </header>
            <span className='cart__quantity'>{product.productsInCart.quantity}</span>
            <footer className='cart__item-footer'>
                <span className='cart__total-label'>Total:</span>
                <p className='cart__total-number'> $ {product.price}</p>
            </footer>
        </article>
    )
}

export default ProductCartInfo
