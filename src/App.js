import React, { Component } from 'react';
import { Button, Colors, Sizes } from 'react-foundation';
import './App.css';
import IngredientList from './components/IngredientList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes with Redux</h1>
        </header>
        <main>
          <IngredientList />

          <h4>Add Ingredient</h4>
          <form>
            <div className="grid-x grid-padding-x">
              <div className="small-3 cell">
                <label htmlFor="item-input" className="text-right middle">
                  Name
                </label>
              </div>
              <div className="small-6 cell">
                <input type="text" id="item-input" placeholder="Ex: Carrot"/>
              </div>
              <div className="small-3 cell">
                <Button type="submit" color={Colors.SUCCESS}>
                  Add Item
                </Button>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
