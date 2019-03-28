import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = () => {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul className="ingredient-list">
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </ul>
    </div>
  )
}

export default IngredientList;