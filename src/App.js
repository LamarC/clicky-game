import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {

  state = {
    // lottoCards
  };

  removeDog = id => {
    //Filters through the img with and id not equal to the one being removed
    const cards = this.state.dogs.filter((dogs) => dogs.id !== id);

    //Sets the new state equal to the new array
    this.setState({
      cards
    });
  };

  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >

      <
      /header> < /
      div >
    );
  }
}

export default App;