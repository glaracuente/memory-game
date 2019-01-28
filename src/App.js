import React, { Component } from "react";
import "./App.css";
import Panel from "./Components/Panel";
import Nav from "./Components/Nav";

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    level: "Normal",
    characters: []
  };

  componentWillMount() {
    this.createAndSetCharacterArray();
  }

  createAndSetCharacterArray = () => {
    console.log("setting characters...");

    let characters = [];
    let amount;

    if (this.state.level === "Normal") {
      amount = 12;
    }
    if (this.state.level === "Easy") {
      amount = 6;
    }

    for (let c = 0; c < amount; c++) {
      let character = {
        filename: `./images/${c}.png`,
        id: c,
        clicked: false
      };

      characters.push(character);
    }

    this.setState({ characters });
  };

  // setlevel = level => {
  //  this.setState({ level });
  // };

  handleClick = char => {
    console.log(this.state.characters);
    const characters = [...this.state.characters];
    const index = characters.indexOf(char);

    if (characters[index].clicked) {
      this.createAndSetCharacterArray();
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
  };

  shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    const { characters } = this.state;
    let shuffledCharacters = this.shuffle(characters);

    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <div className="row justify-content-center mt-3">
          <div className="col-11">
            {shuffledCharacters.map(character => (
              <Panel
                key={character.id}
                filename={character.filename}
                onClick={() => this.handleClick(character)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
