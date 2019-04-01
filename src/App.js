import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
// import AddIngredient from './containers/AddIngredient';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes with Redux</h1>
        </header>
        <main>
          <IngredientList />
          {/* <AddIngredient /> */}
        </main>
      </div>
    );
  }
}

export default App;
