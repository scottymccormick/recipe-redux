import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import AddIngredient from './containers/AddIngredient';

const ingredients = [
  {
    name: "Item 1"
  },
  {
    name: "Item 2"
  },
  {
    name: "Item 3"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes with Redux</h1>
        </header>
        <main>
          <IngredientList ingredients={ingredients} />
          <AddIngredient />
        </main>
      </div>
    );
  }
}

export default App;
