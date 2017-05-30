import * as ActionTypes from '../actions'

export default function companyFormReducer(state =
{
  addingCompany: false,
  updateCompany: false,
  isFetching: false,
  items: [],
  selected: null,
}, action){
  switch (action.type) {
    case ActionTypes.COMPANY_ADD:
      return {...state, addingCompany: false}
    case ActionTypes.REQUEST_TOURS:
      return Object.assign({}, state, {
        addingCompany: false,
        updateCompany: false,
        isFetching: true,
        selected: null,
      })
    case ActionTypes.RECIEVE_COMPANIES:
      return Object.assign({}, state, {
        addingCompany: false,
        updateCompany: false,
        isFetching: false,
        items: action.companies
      })
    case ActionTypes.SELECT_COMPANY:
      return Object.assign({}, state, {
        addingCompany: false,
        selected: action.selected
      })
    case ActionTypes.COMPANY_DELETE:
      return Object.assign({}, state, {
        addingCompany: false,
        selected: null
      })
    case ActionTypes.COMPANY_UPDATE:
      return Object.assign({}, state, {
        updateCompany: true,
      })
    default:
      return state
  }
}
