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

    console.info('supppppp ' + form.bookingform.values.firstName)
    dispatch({
      type: BOOKING_ADD,
    })
  }
}
