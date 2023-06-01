import React from 'react';
import CardEvent from './CardEvent'


import img0 from "../assets/images/BUS.jpg"
import img02 from "../assets/images/DEV.jpg"
import img03 from "../assets/images/HTML.jpg"
import img04 from "../assets/images/JS.jpg"
import img05 from "../assets/images/DEV.jpg"
import img06 from "../assets/images/HTML.jpg"



function MainEvents() {
  return (
    <div className='container offers'>

        <div className='row row-cols-1 row-cols-md-3 g-4'>

            <CardEvent img={img0} text="HTML EVENT"/>
            <CardEvent img={img02} text="JAVA JS EVENT"/>
            <CardEvent img={img03} text="BUSINESS EVENT"/>
            <CardEvent img={img04} text="PHOTOGRAPHY EVENT"/>
            <CardEvent img={img05} text="MUSIC EVENT"/>
            <CardEvent img={img06} text="SOFT-SKILLS EVENT"/>

        </div>
    </div>
  );
}

export default MainEvents;