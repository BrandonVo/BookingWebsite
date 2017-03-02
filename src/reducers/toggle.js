import * as ActionTypes from '../actions'




export default function toggle(state =
{
  isDropdownOpen: false,
}, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_DROPDOWN:
      {if (action.isOpen !== undefined) {
        return {...state, isDropdownOpen: action.isOpen}
      } else {
        return {...state, isDropdownOpen: !state.isDropdownOpen}
      }}
    default:
      return state
  }
}
