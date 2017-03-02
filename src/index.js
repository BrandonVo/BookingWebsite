import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'
import createRoutes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


injectTapEventPlugin()
render(
  <Provider store={store}>
    <Router history={history} routes={createRoutes()} />
  </Provider>,
  document.getElementById('root')
)
