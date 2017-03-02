import React from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/IconButton'
import { browserHistory } from 'react-router'


function handleAbout(){
  browserHistory.push('/about')
}

function handleNewBooking(){
  browserHistory.push('/addBooking')
}

const Header = ({ isAuthenticated, profile, error, onLoginClick, onLogoutClick, onToggleDropdown, isDropdownOpen, onToggleDropdownChange }) => (
    <div>
      <AppBar
        title="gatherologie"
        iconElementLeft = {isAuthenticated ? <IconButton onClick={onToggleDropdown}><MoreVertIcon/></IconButton> : <IconButton><MoreVertIcon/></IconButton>}

        iconElementRight = {!isAuthenticated ? <FlatButton label="Login" onClick={onLoginClick}/> : <FlatButton label="Logout" onClick={onLogoutClick}/>}
      />
      <Drawer
        open={isDropdownOpen}
        docked={false}
        onRequestChange={onToggleDropdownChange}
      >
        <MenuItem onClick={handleAbout}>About</MenuItem>
        <MenuItem onClick={handleNewBooking}>New Booking</MenuItem>
        <MenuItem onClick={onToggleDropdown}>Close Drawer</MenuItem>
      </Drawer>
      { error &&
        <p>{error}{profile.nickname}</p>
      }
    </div>
)


Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired,
  onToggleDropdown: React.PropTypes.func.isRequired,
  isDropdownOpen:React.PropTypes.bool.isRequired,
  onToggleDropdownChange: React.PropTypes.func.isRequired,
}

export default Header
