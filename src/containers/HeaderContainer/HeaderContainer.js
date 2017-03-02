import { connect } from 'react-redux'
import { loginRequest, logoutSuccess, toggleDropdown } from '../../actions'
import { Header } from '../../components'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  const {isDropdownOpen} = state.toggle
  return {
    isAuthenticated,
    profile,
    error,
    isDropdownOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => dispatch(loginRequest()),
    onLogoutClick: () => dispatch(logoutSuccess()),
    onToggleDropdown: () => dispatch(toggleDropdown()),
    onToggleDropdownChange: (isOpen) => dispatch(toggleDropdown(isOpen)),
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
