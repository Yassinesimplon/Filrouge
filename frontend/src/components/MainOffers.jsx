import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img2 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img3 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img4 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img5 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img6 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"
import Img7 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"

function Main() {
  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card img={Img01} text="Wordpress " />
        <Card img={Img2} text="Wordpress" />
        <Card img={Img3} text="Wordpress" />
        <Card img={Img4} text="Wordpress" />
        <Card img={Img5} text=" Wordpress" />
        <Card img={Img6} text="Wordpress" />
        <Card img={Img7} text="Wordpress " />
      </div>
    </div>
  );
}

export default Main;
