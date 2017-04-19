import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer, NewBookingContainer, NewCompanyContainer, NewTourContainer } from './containers'
import { HomePage, AboutPage, NotFoundPage } from './components'

export default function createRoutes() {
  return(
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/addBooking' component={NewBookingContainer} />
      <Route path='/addCompany' component={NewCompanyContainer} />
      <Route path='/addTour' component={NewTourContainer} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
