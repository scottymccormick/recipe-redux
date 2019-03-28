import React from 'react';
import { Button, Colors, Sizes } from 'react-foundation';

const Ingredient = ({ name, onDeleteClick }) => {
  return (
    <li>
      {name}
      <Button color={Colors.ALERT} size={Sizes.TINY} onClick={onDeleteClick}>X</Button>  
    </li>
  )
}

export default Ingredient;