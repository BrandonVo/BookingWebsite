import * as ActionTypes from '../actions'

export default function tourFormReducer(state =
{
  addingTour: false,
  updateTour: false,
  isFetching: false,
  items: [],
  selected: null,
}, action){
  switch (action.type) {
    case ActionTypes.TOUR_ADD:
      return Object.assign({}, state, {
        addingTour: true,
        selected: null,
      })
    case ActionTypes.REQUEST_TOURS:
      return Object.assign({}, state, {
        addingTour: false,
        updateTour: false,
        isFetching: true,
        selected: null,
      })
    case ActionTypes.RECIEVE_TOURS:
      return Object.assign({}, state, {
        addingTour: false,
        updateTour: false,
        isFetching: false,
        items: action.tours
      })
    case ActionTypes.SELECT_TOUR:
      return Object.assign({}, state, {
        addingTour: false,
        selected: action.selected
      })
    case ActionTypes.TOUR_DELETE:
      return Object.assign({}, state, {
        addingTour: false,
        selected: null
      })
    case ActionTypes.TOUR_UPDATE:
      return Object.assign({}, state, {
        updateTour: true,
      })
    default:
      return state
  }
}
