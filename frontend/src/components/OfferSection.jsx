import React from 'react'

import OfferExmp from './OfferExmp'

const OfferSection = () => {
  return (
    <div className="offers">
        <div className="container">
            <div className="text-center">
                <h2>Projets disponible</h2>
                {/* <h3>technologies en tendances</h3> */}
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                <OfferExmp />
                
            </div> 
            <div className="text-center discover-more">
                <a href="/offers" target="_blank"><button className="btn btn-primary">DISCOVER MORE</button></a>
            </div>
        </div>  
    </div>
  )
}

export default OfferSection