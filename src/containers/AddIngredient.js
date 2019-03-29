import React, { Component } from 'react';
import { Button, Colors } from 'react-foundation';

class AddIngredient extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default AddIngredient