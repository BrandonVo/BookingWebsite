/* eslint no-console: 0 */
export const COMPANY_ADD = 'BOOKING_ADD'

export function addCompany() {
  return (dispatch, getState) => {
    const form = getState().form

    console.info('hello ' + form.companyform.values.email)
    dispatch({
      type: COMPANY_ADD,
    })
  }
}
