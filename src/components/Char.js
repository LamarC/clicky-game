import React, { Component } from "react";

class Char extends Component {

    handleClick = () => {
        this.props.onCharClick(this.props.index);
    }

    render() {
        return (
            <div className="char">
                <img
                    src={this.props.char.img}
                    alt={this.props.char.name}
                    className="pic"
                    onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Char;