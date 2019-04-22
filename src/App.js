// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
import Apresentacao from './components/content/apresentacao'
import Servicos from './components/content/servicos'
import Rodape from './components/content/rodape'

class App extends Component {
  render() {
    return (
      <div style={{background: "#2DAED4"}}>
        <Header/>
        <Apresentacao/>
        <Servicos/>
        <Rodape/>         
      </div>
    );
  }
}

export default App;