import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div>
                <div className='content'>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}