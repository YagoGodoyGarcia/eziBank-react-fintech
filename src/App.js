// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
import Apresentacao from './components/content/apresentacao'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Apresentacao/>
      </div>
    );
  }
}

export default App;