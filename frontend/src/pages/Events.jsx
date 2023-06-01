import React from 'react'
import IntroEvents from "../components/IntroEvents"
import TextEvents from "../components/TextEvents"
import MainEvents from "../components/MainEvents"

const Events = () => {
  return (
    <div>
      <IntroEvents />
      <TextEvents />
      <div className="offers">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
               <MainEvents />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Events