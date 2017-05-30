/* eslint no-console: 0 */
export const TOUR_ADD = 'TOUR_ADD'
export const TOUR_DELETE = 'TOUR_DELETE'
export const TOUR_UPDATE = 'TOUR_ADD'
export const REQUEST_TOURS = 'REQUEST_TOURS'
export const RECIEVE_TOURS = 'RECIEVE_TOURS'
export const SELECT_TOUR = 'SELECT_TOUR'

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

export function deleteTour(){
  return (dispatch, getState) => {
    const tourState = getState().tourForm
    const deleteTour = tourState.selected.tnumber
    console.log('SUPPP ' + deleteTour)
    if (deleteTour) {
      fetch('http://localhost:8080/api/tour', {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tnumber: deleteTour
        }),
      })
      .then(
        dispatch({
          type: TOUR_DELETE,
        })
      )
    }
  }
}

export function updateTour(){
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/tour', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname: form.updatetourform.values.firstName + ' ' + form.updatetourform.values.lastName,
        cemail: form.updatetourform.values.email,
        vname: form.updatetourform.values.vName,
        tourDate: form.updatetourform.values.tourDate,
        timeslot: form.updatetourform.values.timeslot,
        tnumber: form.updatetourform.values.tnumber
      }),
    })
    .then(
      dispatch({
        type: TOUR_UPDATE,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}

export function selectTour(tour) {
  return {
    type: SELECT_TOUR,
    selected: tour
  }
}

function requestTours() {
  return {
    type: REQUEST_TOURS
  }
}


function recieveTours(json) {
  return {
    type: RECIEVE_TOURS,
    tours: json.data
  }
}

export function viewTours() {
  return dispatch => {
    dispatch(requestTours())
    return fetch('http://localhost:8080/api/tour')
    .then(response => response.json())
    .then(json => dispatch(recieveTours(json)))
  }
}
