import React, {
  Component
} from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {

  state = {
    // cards
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
      /header> <
      /div>
    );
  }
}

export default App;