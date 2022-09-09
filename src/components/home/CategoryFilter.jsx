import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import PriceFilter from './PriceFilter'

const CategoryFilter = ({setObjFilterPrice}) => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`;
        axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleCLickCategory = id => {
        dispatch(getProductByCategory(id))
    }

    // const products = useSelector(state => state.products)

    const handleClickAllProducts = () => {
        dispatch(getAllProducts())
    }

    return (
        <section className='home__filters'>
            <PriceFilter setObjFilterPrice={setObjFilterPrice}/>
            
            <article className='home__filters-category'>
                <div className='home__filters-titles'>
                    <span className='home__filters-title'>Category</span>
                    <BsChevronDown className='home__filters-icon' />
                </div>
                <ul className='home__filters-lists'>
                <li onClick={() => handleClickAllProducts()} className='home__cat-list'>All Products</li>
                    {
                        categories?.map(category => (
                            <li onClick={() => handleCLickCategory(category.id)} key={category.id} className='home__cat-list'>{category.name}</li>
                        ))
                    }
                </ul>
            </article>

        </section>
    )
}

export default CategoryFilter
