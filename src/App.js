import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Panel from './Components/Panel'

function App() {
  const characters =
    ['a', 'b', 'c', 'd',
      'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l']

  return (
    //<Panel image='./images/b.png'/>
    //<Wrapper>
    // <Title>Friends List</Title>
    <div>
      {characters.map(character => (
        <Panel filename={character} />
      ))}    
      </div>
    //</Wrapper>
  );
}

export default App;
