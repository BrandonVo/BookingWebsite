import React from 'react'
import { HeaderContainer } from '../../containers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {
    return(
      <MuiThemeProvider>
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  checkLogin: React.PropTypes.func.isRequired
}

export default App
