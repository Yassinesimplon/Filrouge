import React from 'react'

import Intro from '../components/Intro'
import IntroText  from '../components/IntroText'
import OfferSection  from  '../components/OfferSection'
import EventsSection from  '../components/EventsSection'



const Home = () => {
  return (
    <div>
      
      <Intro />
      <IntroText />
      <OfferSection />
      <EventsSection />
      
    </div>
  )
}

export default Home