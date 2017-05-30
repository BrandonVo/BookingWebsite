import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer, NewBookingContainer, NewCompanyContainer,
  NewTourContainer, AllToursContainer, UpdateTourContainer,
  AllCompaniesContainer, UpdateCompanyContainer } from './containers'
import { HomePage, AboutPage, NotFoundPage } from './components'

export default function createRoutes() {
  return(
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/addBooking' component={NewBookingContainer} />
      <Route path='/addCompany' component={NewCompanyContainer} />
      <Route path='/addTour' component={NewTourContainer} />
      <Route path='/viewTours' component={AllToursContainer} />
      <Route path='/updateTour' component={UpdateTourContainer} />
      <Route path='/viewCompanies' component={AllCompaniesContainer} />
      <Route path='/updateCompany' component={UpdateCompanyContainer} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
