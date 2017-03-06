import * as ActionTypes from '../actions'

export default function companyFormReducer(state =
{
  addingCompany: false,
}, action){
  switch (action.type) {
    case ActionTypes.COMPANY_ADD:
      return {...state, addingCompany: false}
    default:
      return state
  }
}
