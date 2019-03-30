import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { Button, Colors } from 'react-foundation';
import { connect } from 'react-redux'

class IngredientList  extends Component{
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {this.props.ingredientState.ingredients.map((ingredient, idx) => {
            return <Ingredient key={idx} name={ingredient.name} 
            // onDeleteClick={() => onDeleteClick(idx)} 
            />
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="item-input" className="text-right middle">
                Name
              </label>
            </div>
            <div className="small-6 cell">
              <input type="text" id="item-input" placeholder="Ex: Carrot"
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

function mapStateToProps (reduxState) {
  console.log(reduxState)
  return {
    ingredientState: reduxState.ingredients
  }
}

export default connect(mapStateToProps)(IngredientList);