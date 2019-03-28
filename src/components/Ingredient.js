import React from 'react';
import { Button, Colors, Sizes } from 'react-foundation';

const Ingredient = () => {
  return (
    <li>
      Item Text
      <Button color={Colors.ALERT} size={Sizes.TINY}>X</Button>  
    </li>
  )
}

export default Ingredient;