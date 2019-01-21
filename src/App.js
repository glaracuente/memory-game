import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Panel from './Components/Panel'

class App extends Component {
  state = {
    characters : 
    ['a', 'b', 'c', 'd', 
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l']
  }

  render() {
    return (
      //<Panel image='./images/b.png'/>
      //<Wrapper>
       // <Title>Friends List</Title>
       <div>
        {this.state.characters.forEach(function(character) {
          return <Panel filename={character}/>
        })}
        </div>
      //</Wrapper>
    );
  }
}

export default App;
