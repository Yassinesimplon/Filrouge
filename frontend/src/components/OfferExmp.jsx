import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img2 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img3 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"


function Main() {
  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card img={Img01} text="BACK-END NODEJS"/>
        <Card img={Img2} text="BACK-END DJANGO"/>
        <Card img={Img3} text="FRONT-END REACT"/>
      </div>
    </div>
  );
}

export default Main;
