/* eslint no-console: 0 */
export const COMPANY_ADD = 'COMPANY_ADD'

export function addCompany() {
  return (dispatch, getState) => {
    const form = getState().form
    console.log('SUPPPPPP')
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
