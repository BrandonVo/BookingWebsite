/* eslint no-console: 0 */
export const TOUR_ADD = 'TOUR_ADD'
export const TOUR_VIEW = 'TOUR_VIEW'

export function addTour() {
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/tour', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname: form.tourform.values.firstName + ' ' + form.tourform.values.lastName,
        cemail: form.tourform.values.email,
        vname: form.tourform.values.vName,
        tourDate: form.tourform.values.tourDate,
        timeslot: form.tourform.values.timeslot
      }),
    })
    .then(
      dispatch({
        type: TOUR_ADD,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}
