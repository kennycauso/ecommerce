import React from 'react'
import { FiSearch } from 'react-icons/fi'

const InputSearch = ({ setInputSearch }) => {


    const handleChange = e => {
        setInputSearch(e.target.value.trim())
    }

    return (
        <form className='home__search-form' action="">
            <input onChange={handleChange} className='home__search-input' type="text" placeholder='What are you looking for?' />
            <button className='home__search-btn'><FiSearch className='home__search-icon' /></button>
        </form>

    )
}

export default InputSearch