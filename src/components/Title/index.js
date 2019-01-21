import React from "react";
import Card from "./Card";

const Card = (props) => {
    return (
        <div className="card">
            {props.card.map((card, index) => <Card
                card={card}
                index={index}
                onCardClick={props.onCardClick}
                key={index} />
            )}
        </div>
    )
}

export default Card;