// reducers/index.js

import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import auth from './auth'
import bookingForm from './newbooking'
import companyForm from './company'
import toggle from './toggle'


const rootReducer = combineReducers({
  routing,
  auth,
  form : formReducer,
  bookingForm,
  toggle,
  companyForm,
})

export default rootReducer
