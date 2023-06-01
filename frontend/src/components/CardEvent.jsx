import React from 'react';


function CardEvent(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={props.img} class="card-img-top img-fluid" alt="Marketing"/>
                 <div className="card-body">
                    <h5 className="card-title text-center">{props.text}</h5>
                </div>
            </div>
        </div>
    );
}

export default CardEvent ;