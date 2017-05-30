import { connect } from 'react-redux'
import {UpdateBookingForm} from '../../components'
import React from 'react'
import { updateBooking } from '../../actions'
import { initialize } from 'redux-form'

class UpdateBookingContainer extends React.Component {
  render() {
    return (
      <div>
      <center><UpdateBookingForm {...this.props}/></center>
            </div>
    )
  }

  componentDidMount() {
    let names = this.props.selected.cname.split(' ')
    let dateStr = this.props.selected.eventdate
    let day = parseInt(dateStr.substring(8,10))
    let month = parseInt(dateStr.substring(5,7))
    let year = parseInt(dateStr.substring(0,4))
    let date = new Date(year, month - 1, day)
    const initialFormData = {
      bnumber: this.props.selected.bnumber,
      firstName: names[0],
      lastName: names[1],
      email: this.props.selected.cemail,
      vName: this.props.selected.vname,
      price: this.props.selected.price,
      eventDate: date
    }

    this.props.initialize('updatebookingform', initialFormData)
  }
}


UpdateBookingContainer.propTypes = {
  initialize: React.PropTypes.func,
  selected: React.PropTypes.object,
  bnumber: React.PropTypes.string,
  cname: React.PropTypes.string,
  cemail: React.PropTypes.string,
  vname: React.PropTypes.string,
  price: React.PropTypes.number,
  eventdate: React.PropTypes.string,
}


const mapDispatchToProps = (dispatch) => ({
  updateBooking: () => dispatch(updateBooking()),
  initialize: (form, data) => dispatch(initialize(form, data)),
})

const mapStateToProps = (state) => {
  const {
    selected
  } = state.bookingForm
  return {
    selected
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateBookingContainer)
