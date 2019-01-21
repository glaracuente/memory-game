import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Panel from './Components/Panel'
import Nav from './Components/Nav'

class App extends Component {
  state = {
    characters:
      ['a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l']
  }
  
  render() {
    return (
      <div>
      <Nav />
        {this.state.characters.map(character => (
          <Panel filename={character} />
        ))}
      </div>
    );
  }
}

  export default App;
