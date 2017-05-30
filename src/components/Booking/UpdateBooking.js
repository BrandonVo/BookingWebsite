import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField, DatePicker} from 'redux-form-material-ui'
import { browserHistory } from 'react-router'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email', 'vName' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const UpdateBookingForm = ({updateBooking, handleSubmit, pristine, submitting}) => {
  return (
    <form onSubmit={handleSubmit(updateBooking)}>
    <div>
      <h2>Update Booking</h2>
    </div>
      <div>
        <Field name="bnumber" component={TextField} disabled={true} floatingLabelText="Number"/>
      </div>
      <div>
        <Field name="firstName" component={TextField} floatingLabelText="Name"/>
      </div>
      <div>
        <Field name="lastName" component={TextField} floatingLabelText="Last Name"/>
      </div>
      <div>
        <Field name="email" component={TextField} floatingLabelText="Email"/>
      </div>
      <div>
        <Field name="vName" component={TextField} floatingLabelText="Venue/Vendor Name"/>
      </div>
      <div>
        <Field name="price" component={TextField} floatingLabelText="Price"/>
      </div>
      <div>
        <Field name="eventDate" component={DatePicker} floatingLabelText="Event Date"/>
      </div>
      <br/>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" onClick={() => {browserHistory.push('/viewBookings')}}>Cancel
        </button>
      </div>
    </form>
  )
}

UpdateBookingForm.propTypes = {
  updateBooking: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func,
  submitting: React.PropTypes.bool,
}


export default reduxForm({
  form: 'updatebookingform',  // a unique identifier for this form
  validate,
})(UpdateBookingForm)
