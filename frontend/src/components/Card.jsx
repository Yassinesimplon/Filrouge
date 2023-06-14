import React from 'react';
import Img01 from "../assets/images/toa-heftiba-W6q15ddqqJo-unsplash.jpg"


function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <a  href="/notFound" >  
                <img src={Img01} class="card-img-top img-fluid" /></a>
                 <div className="card-body">
                    <h5 className="card-title text-center">{props.text}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;