/* eslint no-console: 0 */
export const BOOKING_ADD = 'BOOKING_ADD'
export const START_BOOKING_ADD = 'START_BOOKING_ADD'

export function startBookingAdd() {
  return {
    type: START_BOOKING_ADD,
  }
}


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
