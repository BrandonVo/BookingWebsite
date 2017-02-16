import { connect } from 'react-redux'
import {BookingForm} from '../../components'
import React from 'react'
import { addBooking } from '../../actions'

class NewBookingContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Create a New Booking</h2>
      <BookingForm /*onSubmit={addBooking}*/ {...this.props}/>
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
