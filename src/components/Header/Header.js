import React from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import { browserHistory } from 'react-router'


function handleAbout(){
  browserHistory.push('/about')
}

function handleNewBooking(){
  browserHistory.push('/addBooking')
}

function handleNewCompany(){
  browserHistory.push('/addCompany')
}

function handleAddTour(){
  browserHistory.push('/addTour')
}

function handleViewAllTours(){
  browserHistory.push('/viewTours')
}

function handleViewAllCompanies(){
  browserHistory.push('/viewCompanies')
}

function handleViewAllBookings(){
  browserHistory.push('/viewBookings')
}

const Header = ({ isAuthenticated, profile, error, onLoginClick, onLogoutClick, onToggleDropdown, isDropdownOpen, onToggleDropdownChange }) => (
    <div>
      <AppBar
        title="gatherologie"
        iconElementLeft = {isAuthenticated ? <IconButton onClick={onToggleDropdown}><MenuIcon/></IconButton> : <IconButton><MenuIcon/></IconButton>}

        iconElementRight = {!isAuthenticated ? <FlatButton label="Login" onClick={onLoginClick}/> : <FlatButton label="Logout" onClick={onLogoutClick}/>}
      />
      <Drawer
        open={isDropdownOpen}
        docked={false}
        onRequestChange={onToggleDropdownChange}
      >
        <MenuItem onClick={handleNewBooking}>Add Booking</MenuItem>
        <MenuItem onClick={handleViewAllBookings}>View Bookings</MenuItem>
        <Divider />
        <MenuItem onClick={handleNewCompany}>Add Company</MenuItem>
        <MenuItem onClick={handleViewAllCompanies}>View Companies</MenuItem>
        <Divider />
        <MenuItem onClick={handleAddTour}>Add Tour</MenuItem>
        <MenuItem onClick={handleViewAllTours}>View Tours</MenuItem>
        <Divider />
        <MenuItem onClick={handleAbout}>About</MenuItem>
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
