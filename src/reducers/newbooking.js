import * as ActionTypes from '../actions'

export default function bookingFormReducer(state =
{
  addingBooking: false,
}, action){
  switch (action.type) {
    case ActionTypes.START_BOOKING_ADD:
      return {...state, addingBooking: true}
    case ActionTypes.BOOKING_ADD:
      return {...state, addingBooking: false}
    default:
      return state
  }
}
