import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

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

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
const BookingForm = ({addBooking, handleSubmit, pristine, reset, submitting}) => {
  return (
    <form onSubmit={handleSubmit(addBooking)}>
    <div>
      <h2>Create a New Booking</h2>
    </div>
      <div>
        <Field name="firstName" component={renderTextField} label="First Name"/>
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name"/>
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email"/>
      </div>
      <div>
        <Field name="vName" component={renderTextField} label="Venue/Vendor Name"/>
      </div>
      <br/>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

BookingForm.propTypes = {
  addBooking: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func,
  submitting: React.PropTypes.bool,
}

renderTextField.propTypes = {
  input: React.PropTypes.obj,
  label: React.PropTypes.string,
  meta : React.PropTypes.obj,
}

export default reduxForm({
  form: 'bookingform',  // a unique identifier for this form
  validate,
})(BookingForm)
