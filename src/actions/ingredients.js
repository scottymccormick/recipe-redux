
// action types
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

// action creators
export function addIngredient(name) {
  return {
    type: ADD_INGREDIENT,
    name
  }
}