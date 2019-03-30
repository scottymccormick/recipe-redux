
// action types
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

// action creators
export function addIngredient(name) {
  return {
    type: ADD_INGREDIENT,
    name
  }
}

export function deleteIngredient(id) {
  return {
    type: DELETE_INGREDIENT,
    id
  }
}