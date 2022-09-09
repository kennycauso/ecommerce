import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

import InputSearch from '../home/InputSearch'
import CategoryFilter from '../home/CategoryFilter'


const Home = () => {

  const [inputSearch, setInputSearch] = useState('')
  const [filterProducts, setFilterProducts] = useState()
  const [objFilterPrice, setObjFilterPrice] = useState({})

  const products = useSelector(state => state.products)

  // Category Filter:
  useEffect(() => {
    if(inputSearch.length !== 0){
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [inputSearch])

  // Price Filter:
  useEffect(() => {
    const filter = products?.filter( e =>{
      const price = Number(e.price)
      const min = objFilterPrice.from
      const max = objFilterPrice.to
      // two inputs with numbers
      if(min && max){
        return min <= price && price <= max
      } else if (min && !max){ // just input from 
        return min <= price
      } else if (!min && max){ // just input to 
        return price <= max
      }else{ // there is not numbers any inputs
        return true
      }
    })
    setFilterProducts(filter)
  }, [objFilterPrice.to, objFilterPrice.from])

  return (
    <div className='home'>
      <CategoryFilter setObjFilterPrice={setObjFilterPrice}/>
      
      <section className='home__container'>
        <InputSearch setInputSearch={setInputSearch} />

        <div className='home__container-card'>
          {
            filterProducts ? //Condition Ternario
              filterProducts?.map(product => (
                <CardHome
                  key={product.id}
                  product={product}
                />
              ))
              :
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
