import { combineReducers } from 'redux'

import {
  ADD_INGREDIENT
} from '../actions/ingredients'

function ingredients(state = [], action) {
  switch(action.type) {
    case ADD_INGREDIENT:
      return [
        ...state, 
        {
          name: action.name
        }
      ]
    default:
      return state
  }
}

const recipeApp = combineReducers({
  ingredients,
})

export default recipeApp