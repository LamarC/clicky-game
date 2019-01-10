import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";


class App extends Component {

  state = {
    cards
  };

  removeCard = id => {
    //Filters through the img with and id not equal to the one being removed
    const cards = this.state.cards.filter((card) => cards.id !== id);

    //Sets the new state equal to the new array
    this.setState({ cards });
  };

  render() {
    return ( 
    <Wrapper> 
      <Title>Clicky Game</Title>
      {this.state.cards.map((card) => (
        <Cards 
        removeCards={this.removeCards}
        id={card.id}
        key={card.id}
        name={card.name}
        image={card.name}
        />
      ))}
    </Wrapper>
    );
  }
}

export default App;