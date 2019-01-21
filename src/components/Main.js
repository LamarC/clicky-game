import React, { Component } from "react";
import Cards from "./Cards";
import Score from "./Score";

const array = [
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
  {
    name: "",
    img: "",
    clicked: false
  },
]

const shift = (arr) => (
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
);

class Main extends Component {

  state = {
    score: 0,
    chars: shift(array)
  };

};

onCharClick = (index) => {
  if (!this.state.chars[index].clicked) {
    this.setState({
      chars: shift(this.state.chars.map((char, current) => {
        return (current === index) ? { ...char, clicked: true } : char
      })),
      score: this.state.score + 1
    });

  } else {
    this.setState({
      chars: shift(this.state.chars.map((char) => { return { ...char, clicked: false } })),
      score: 0
    });
  }
}

render(){
  return(
    <div className="main">
      <header className="header">
        <h1>Clicky Game</h1>
        <h2>Click on a card without choosing the same more than once</h2>

        <Score 
        score={this.state.score}/>
      </header>
    </div>
  )
}


export default Main;