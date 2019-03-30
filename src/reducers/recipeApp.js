import { combineReducers } from 'redux'

import {
  ADD_INGREDIENT, DELETE_INGREDIENT
} from '../actions/ingredients'

const initialState = {
  id: 3,
  ingredients: [
    {
      id: 0,
      name: "Item 1"
    },
    {
      id: 1,
      name: "Item 2"
    },
    {
      id: 2,
      name: "Item 3"
    }
  ]
}

function ingredients(state = initialState, action) {
  switch(action.type) {
    case ADD_INGREDIENT:
      const newState = {...state}
      newState.id++
      return {
        ...newState, 
        ingredients: [ ...newState.ingredients, { name: action.name, id: newState.id } ]
      }
    case DELETE_INGREDIENT:
      let ingredients = state.ingredients.filter(({ id }) => id !== action.id)
      return {
        ...state,
        ingredients
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  ingredients,
})

export default rootReducer