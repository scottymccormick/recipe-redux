import React, { Component } from 'react';
import { Button, Colors, Sizes, Alignments } from 'react-foundation';
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
          <ul className="ingredient-list">
            <li>
              Item Text
              <Button color={Colors.ALERT} size={Sizes.TINY}>X</Button>  
            </li>
            <li>
              Item Text
              <Button color={Colors.ALERT} size={Sizes.TINY}>X</Button>  
            </li>
            <li>
              Item Text
              <Button color={Colors.ALERT} size={Sizes.TINY}>X</Button>  
            </li>
          </ul>
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
