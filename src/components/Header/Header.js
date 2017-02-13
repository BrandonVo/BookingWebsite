import React from 'react'
import {
  NavItem,
  Space,
  Fixed,
  Toolbar,
  Button,
} from 'rebass'
import { Flex } from 'reflexbox'

const Header = ({ isAuthenticated, profile, error, onLoginClick, onLogoutClick }) => (
    <Fixed top left right zIndex={1}>
      <Toolbar backgroundColor="black">
        <NavItem is="object" color="midgray">
            gatherologie
        </NavItem>
        <Space auto />
        <NavItem is="object">
          {
            !isAuthenticated ?
              <Button onClick={onLoginClick} backgroundColor="green">
                Login
              </Button> :
              <Flex>
                <NavItem color="midgray" >
                  {profile.nickname}
                </NavItem>
                  <Button onClick={onLogoutClick} backgroundColor="red">
                    Logout
                  </Button>
              </Flex>
          }
        </NavItem>
        { error &&
          <p>{error}</p>
        }
      </Toolbar>
    </Fixed>
  )

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired
}

export default Header
