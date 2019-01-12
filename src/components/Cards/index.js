import React from 'react';
// import './Cards.css';

const Cards = (props) => {
    return (
    <div className='card'>
        <div className='img-container'>
            <img alt={props.name} src={props.image} />      
        </div>

        {/* <span onClick={() => props.removeCards(props.id)} className='remove'></span> */}
    </div>
    );
}

export default Cards;