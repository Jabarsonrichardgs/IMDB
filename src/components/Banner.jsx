import React from 'react'
import Bannerimg from '/banner.jpg'

const Banner = () => {
  
  return (
    <div>
        <div className="banner">
            <img src={Bannerimg} alt="" className=' ' />
            <h2>DeadPool & Wolverine</h2>
        </div>
    </div>
  )
}

export default Banner