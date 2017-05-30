/* eslint no-console: 0 */
export const BOOKING_ADD = 'BOOKING_ADD'
export const BOOKING_DELETE = 'BOOKING_DELETE'
export const BOOKING_UPDATE = 'BOOKING_ADD'
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS'
export const RECIEVE_BOOKINGS = 'RECIEVE_BOOKINGS'
export const SELECT_BOOKING = 'SELECT_BOOKING'
import { browserHistory } from 'react-router'

export function addBooking() {
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/booking', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname: form.bookingform.values.firstName + ' ' + form.bookingform.values.lastName,
        cemail: form.bookingform.values.email,
        vname: form.bookingform.values.vName,
        price: form.bookingform.values.price,
        eventDate: form.bookingform.values.eventDate
      }),
    })
    .then(
      dispatch({
        type: BOOKING_ADD,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}


export function deleteBooking(){
  return (dispatch, getState) => {
    const bookingState = getState().bookingForm
    const deleteBooking = bookingState.selected.bnumber
    if (deleteBooking) {
      fetch('http://localhost:8080/api/booking', {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bnumber: deleteBooking
        }),
      })
      .then(
        dispatch({
          type: BOOKING_DELETE,
        })
      )
    }
  }
}

export function updateBooking(){
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/booking', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname:form.updatebookingform.values.firstName + ' ' + form.updatebookingform.values.lastName,
        cemail: form.updatebookingform.values.email,
        vname: form.updatebookingform.values.vName,
        price: form.updatebookingform.values.price,
        eventDate: form.updatebookingform.values.eventDate,
        bnumber: form.updatebookingform.values.bnumber
      }),
    })
    .then(
      browserHistory.push('/viewBookings')
    )
    .then(
      dispatch({
        type: BOOKING_UPDATE,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}


export function selectBooking(booking) {
  return {
    type: SELECT_BOOKING,
    selected: booking
  }
}

function requestBookings() {
  return {
    type: REQUEST_BOOKINGS
  }
}


function recieveBookings(json) {
  return {
    type: RECIEVE_BOOKINGS,
    bookings: json.data
  }
}

export function viewBookings() {
  return dispatch => {
    dispatch(requestBookings())
    return fetch('http://localhost:8080/api/booking')
    .then(response => response.json())
    .then(json => dispatch(recieveBookings(json)))
  }
}
