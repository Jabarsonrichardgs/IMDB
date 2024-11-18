import React from 'react'
import Logoimg from '/movie.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="nav-container border-black flex items-center space-x-7 md:space-x-8 md:pl-12 py-4 bg-black pl-3  ">
            <img src={Logoimg} alt="" className='w-[50px]' />
            <Link to="/"><h3 className='font-bold text-red-500 text-xl'>Movies</h3></Link>
            <Link to={'/favourite'}> <h3 className='font-bold text-red-500 text-xl'>Favourites</h3></Link>
            
           
        </div>
    </div>
  )
}

export default Navbar