/* eslint no-console: 0 */
export const COMPANY_ADD = 'COMPANY_ADD'
export const COMPANY_DELETE = 'COMPANY_DELETE'
export const COMPANY_UPDATE = 'COMPANY_ADD'
export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECIEVE_COMPANIES = 'RECIEVE_COMPANIES'
export const SELECT_COMPANY = 'SELECT_COMPANY'

export function addCompany() {
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/company', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname: form.companyform.values.companyName,
        cdescription: form.companyform.values.description,
        cemail: form.companyform.values.email,
        cphone: form.companyform.values.phone,
      }),
    })
    .then(
      dispatch({
        type: COMPANY_ADD,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}

export function deleteCompany(){
  return (dispatch, getState) => {
    const companyState = getState().companyForm
    const deleteCompany = companyState.selected.cnumber
    console.log('SUPPP ' + deleteCompany)
    if (deleteCompany) {
      fetch('http://localhost:8080/api/company', {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cnumber: deleteCompany
        }),
      })
      .then(
        dispatch({
          type: COMPANY_DELETE,
        })
      )
    }
  }
}


export function updateCompany(){
  return (dispatch, getState) => {
    const form = getState().form
    fetch('http://localhost:8080/api/company', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cname: form.updatecompanyform.values.companyName,
        cemail: form.updatecompanyform.values.email,
        cdescription: form.updatecompanyform.values.description,
        cphone: form.updatecompanyform.values.phone,
        cnumber: form.updatecompanyform.values.cnumber
      }),
    })
    .then(
      dispatch({
        type: COMPANY_UPDATE,
      })
    )
    .catch(error => { console.log('request failed', error) })
  }
}


export function selectCompany(company) {
  return {
    type: SELECT_COMPANY,
    selected: company
  }
}

function requestCompanies() {
  return {
    type: REQUEST_COMPANIES
  }
}


function recieveCompanies(json) {
  return {
    type: RECIEVE_COMPANIES,
    companies: json.data
  }
}

export function viewCompanies() {
  return dispatch => {
    dispatch(requestCompanies())
    return fetch('http://localhost:8080/api/company')
    .then(response => response.json())
    .then(json => dispatch(recieveCompanies(json)))
  }
}
