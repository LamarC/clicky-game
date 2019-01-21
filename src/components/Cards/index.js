import React, { Component } from "react";

class Card extends Component {

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
    }

    render() {
        return (
            <div className="card">
                <img
                    src={this.props.character.img}
                    alt={this.props.character.name}
                    className="pic"
                    onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Card;