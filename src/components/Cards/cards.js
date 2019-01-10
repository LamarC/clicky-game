import React from 'react';
import './style.css';

const Cards = props => (
    <div className='lottoCard'>
        <div className='img-container'>
            <img className='img-responsive' alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
        </div>
    </div>
);
  