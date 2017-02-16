import { browserHistory } from 'react-router'
import AuthService from '../utils/AuthService'
import Promise from 'promise'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const authService = new AuthService('ffTrgGT7c7TtrWPPvKYjoeK1GefPQ9MD', 'brandonsexample.auth0.com')
/* eslint no-console: 0 */
// Listen to authenticated event from AuthService and get the profile of the user
// Done on every page startup
export function checkLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error)
          return dispatch(loginError(error))
        AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        return dispatch(loginSuccess(profile, dispatch))
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function loginRequest() {
  authService.login()
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile, dispatch) {
  return Promise.resolve(dispatch({
    type: LOGIN_SUCCESS,
    profile
  })).then(() => {console.log('sup'); browserHistory.push('/addBooking')})
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function logoutSuccess() {
  authService.logout()
  browserHistory.push('/')
  return {
    type: LOGOUT_SUCCESS
  }
}
