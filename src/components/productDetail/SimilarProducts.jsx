import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const SimilarProducts = ({ productInfo }) => {

  const [filterProducts, setFilterProducts] = useState()

  const products = useSelector(state => state.products)

  useEffect(() => {
    if (productInfo) {
      const filter = products.filter(e => e.category.name === productInfo.category)

      setFilterProducts(filter)
    }
  }, [productInfo])

  return (
    <section className='similar-products'>
      <span className='similar-products__title'>Discover similar items</span>
      <div className='container-similar-products'>
        {
          filterProducts?.map(product => {
            if (product.title !== productInfo.title) {
              return <CardHome
                key={product.id}
                product={product}
              />
            }
          })
        }
      </div>
    </section>
  )
}

export default SimilarProducts
