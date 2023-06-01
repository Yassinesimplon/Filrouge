import React from 'react'
import IntroOffers from '../components/introOffers'
import MainOffers from "../components/MainOffers"
import TextOffers from '../components/TextOffers'


const Offers = () => {
  return (
    <div>
      <IntroOffers />
      <TextOffers />
      <div className="offers">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
               <MainOffers />
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Offers