import * as ActionTypes from '../actions'

export default function tourFormReducer(state =
{
  addingTour: false,
  tours: [],
}, action){
  switch (action.type) {
    case ActionTypes.TOUR_ADD:
      return {...state, addingTour: false}
    case ActionTypes.TOUR_VIEW:
      return {...state, addingTour: false}
    default:
      return state
  }
}
