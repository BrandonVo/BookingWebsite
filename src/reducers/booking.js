import * as ActionTypes from '../actions'

export default function bookingFormReducer(state =
{
  addingBooking: false,
  updateBooking: false,
  isFetching: false,
  items: [],
  selected: null,
}, action){
  switch (action.type) {
    case ActionTypes.BOOKING_ADD:
      return Object.assign({}, state, {
        addingBooking: true,
        selected: null,
      })
    case ActionTypes.REQUEST_BOOKINGS:
      return Object.assign({}, state, {
        addBooking: false,
        updateBooking: false,
        isFetching: true,
        selected: null,
      })
    case ActionTypes.RECIEVE_BOOKINGS:
      return Object.assign({}, state, {
        addingBooking: false,
        updateBooking: false,
        isFetching: false,
        items: action.bookings
      })
    case ActionTypes.SELECT_BOOKING:
      return Object.assign({}, state, {
        addingBooking: false,
        selected: action.selected
      })
    case ActionTypes.BOOKING_DELETE:
      return Object.assign({}, state, {
        addingBooking: false,
        selected: null
      })
    case ActionTypes.BOOKING_UPDATE:
      return Object.assign({}, state, {
        updateBooking: true,
      })
    default:
      return state
  }
}
