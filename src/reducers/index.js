// reducers/index.js

import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import auth from './auth'
import bookingForm from './booking'
import companyForm from './company'
import tourForm from './tour'
import toggle from './toggle'


const rootReducer = combineReducers({
  routing,
  auth,
  form : formReducer,
  bookingForm,
  toggle,
  companyForm,
  tourForm,
})

export default rootReducer
