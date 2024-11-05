import React from 'react'
import { FaSearch } from "react-icons/fa";
const Aside = () => {
    return (
        <div className='app-aside'>
            <div className='aside-search'>
                <span><FaSearch /></span>
                <input type="search" placeholder='Search' />
            </div>
        </div>
    )
}

export default Aside