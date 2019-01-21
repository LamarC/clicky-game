import React from "react";

import Char from "./Char";

const Card = (props) => {
    return (
        <div className="char-card">
            {props.char.map((char, index) => <Char
                char={char}
                index={index}
                onCharClick={props.onCharClick}
                key={index} />
            )}
        </div>
    )
}

export default Card;