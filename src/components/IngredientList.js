import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, onDeleteClick }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul className="ingredient-list">
        {ingredients.map((ingredient, idx) => {
          return <Ingredient key={idx} name={ingredient.name} onDeleteClick={() => onDeleteClick(idx)} />
        })}
      </ul>
    </div>
  )
}

export default IngredientList;