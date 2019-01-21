import React, { Component } from "react";

import Card from "./Card";
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

class Game extends Component {

  state = {
      score: 0,
      characters: shift(array)
  };
}

render() {
  return ()
}

export default Main;