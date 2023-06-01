import React from 'react';

function CardRecrut(props) {
    return (
        <div className="a">
        <a href="/notFound">{props.text}</a>
        <p>{props.desc}</p>
    </div>
    );
}

export default CardRecrut ;