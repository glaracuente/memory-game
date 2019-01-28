import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Panel from "./Components/Panel";
import Nav from "./Components/Nav";
import Form from "./Components/Form";

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    amount: 12,
    characters: []
  };

  handleSubmit = () => {
    console.log("submit");
    const amount = 6;
    this.setState({ amount });
    this.createAndSetCharacterArray(this.state.amount);
  };

  createAndSetCharacterArray = amount => {
    let characters = [];
    for (let c = 0; c < amount; c++) {
      let character = {
        filename: `./images/${c}.png`,
        id: c,
        clicked: false
      };

      characters.push(character);
    }

    //return characters;
    this.setState({ characters });
  };

  handleClick = char => {
    //event.preventDefault();
    const characters = [...this.state.characters];
    const index = characters.indexOf(char);

    if (characters[index].clicked) {
      this.setState({ score: 0 });
    } else {
      characters[index].clicked = true;
      this.setState({ characters });
      const newScore = this.state.score + 1;
      this.setState({ score: newScore });

      if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    }

    this.shuffle();
  };

  shuffle = () => {
    const characters = [...this.state.characters];
    let currentIndex = characters.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = characters[currentIndex];
      characters[currentIndex] = characters[randomIndex];
      characters[randomIndex] = temporaryValue;
    }

    this.setState({ characters });
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Form onSubmit={() => this.handleSubmit()} />
        {this.state.characters.map(character => (
          <Panel
            key={character.id}
            filename={character.filename}
            onClick={() => this.handleClick(character)}
          />
        ))}
      </div>
    );
  }
}

export default App;
