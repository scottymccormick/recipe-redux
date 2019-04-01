import React from 'react';
import { Button, Colors, Sizes } from 'react-foundation';

const Ingredient = ({ name, removeIngredient }) => {
  return (
    <li>
      {name}
      <Button color={Colors.ALERT} size={Sizes.TINY} onClick={removeIngredient}>X</Button>  
    </li>
  )
}

export default Ingredient;