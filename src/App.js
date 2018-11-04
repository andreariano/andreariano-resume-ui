import React, { Component } from 'react';
import './App.css';

import SectionTitle from "./components/SectionTitle"
import Bio from "./components/Bio"
import Skills from "./components/Skills"

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <SectionTitle id="titleName" title="Fulano" />
        <Bio />
        <SectionTitle id="tools" title="Skills" />
        <Skills />
      </div>
    );
  }
}

export default App;
