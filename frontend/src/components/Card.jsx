import React from 'react';


function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <a  href="/notFound" >  
                <img src={props.img} class="card-img-top img-fluid" alt="Marketing"/></a>
                 <div className="card-body">
                    <h5 className="card-title text-center">{props.text}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;