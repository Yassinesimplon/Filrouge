import React from 'react'
import img2 from '../assets/images/DEV.jpg'

const EventsSection = () => {
  return (
    <div className="hero">
        <div className="container">
            <h2 className="text-center">Main Dev Eldjazair Events</h2>
            <div className="hero-image">
                <img src={img2} alt=""/>
                <div className="hero-overlay">
                    <h3>Enjoy your days with our selection of Events</h3>
                    <a href="/events" target="_blank"><button>READ</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsSection