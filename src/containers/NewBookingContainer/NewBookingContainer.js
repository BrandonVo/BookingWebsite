import { connect } from 'react-redux'
import {BookingForm} from '../../components'
import React from 'react'
import { addBooking } from '../../actions'

class NewBookingContainer extends React.Component {
  render() {
    return (
      <div>
      <center><BookingForm {...this.props}/></center>
            </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addBooking: () => dispatch(addBooking()),
})

export default connect(
  null,
  mapDispatchToProps,
)(NewBookingContainer)
