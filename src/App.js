import React, { Component } from 'react';
import { Menu, MenuItem, Alignments } from 'react-foundation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes with Redux</h1>
        </header>
        <main>
          <h3>Ingredients</h3>
          <Menu isVertical>
            <MenuItem>Item Text</MenuItem>
            <MenuItem>Item Text</MenuItem>
            <MenuItem>Item Text</MenuItem>
          </Menu>
        </main>
      </div>
    );
  }
}

export default App;
