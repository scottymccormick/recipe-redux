import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { Button, Colors } from 'react-foundation';
import { connect } from 'react-redux'
import { addIngredient, deleteIngredient } from '../actions/ingredients'

class IngredientList  extends Component{
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIngredient(this.state.name)
    e.target.reset()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  removeIngredient(id) {
    this.props.deleteIngredient(id)
  }
  render() {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {this.props.ingredients.map(({name, id}) => {
            return <Ingredient key={id} name={name} 
            removeIngredient={this.removeIngredient.bind(this, id)} 
            />
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="name-input" className="text-right middle">
                Name
              </label>
            </div>
            <div className="small-6 cell">
              <input type="text" name="name" id="name-input" placeholder="Ex: Carrot"
                onChange={this.handleChange}/>
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

function mapStateToProps ({recipe}) {
  return {
    ingredients: recipe.ingredients
  }
}


export default connect(mapStateToProps, {addIngredient, deleteIngredient})(IngredientList);