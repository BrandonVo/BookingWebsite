import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {TextField, DatePicker, SelectField} from 'redux-form-material-ui'
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


const UpdateTourForm = ({updateTour, handleSubmit, pristine, submitting}) => {
  return (
    <form onSubmit={handleSubmit(updateTour)}>
    <div>
      <h2>Update Tour</h2>
    </div>
      <div>
        <Field name="tnumber" component={TextField} disabled={true} floatingLabelText="Number"/>
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
        <Field name="tourDate" component={DatePicker} floatingLabelText="Tour Date"/>
      </div>
      <div>
        <Field name="timeslot" component={SelectField} floatingLabelText="Time of Tour">
          <MenuItem value="AM" primaryText="AM"/>
          <MenuItem value="PM" primaryText="PM"/>
        </Field>
      </div>
      <br/>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" onClick={() => {browserHistory.push('/viewTours')}}>Cancel
        </button>
      </div>
    </form>
  )
}

UpdateTourForm.propTypes = {
  updateTour: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func,
  submitting: React.PropTypes.bool,
}


export default reduxForm({
  form: 'updatetourform',  // a unique identifier for this form
  validate,
})(UpdateTourForm)

/*
,
state => ({
  initialValues: {
    tnumber: state.tourForm.selected.tnumber
  }
}),
export default reduxForm({
  form: 'updatetourform',  // a unique identifier for this form
  validate,
})(UpdateTourForm




import MenuItem from 'material-ui/MenuItem'
SelectField
<div>
  <Field name="cname" component={TextField} floatingLabelText="Name"/>
</div>
<div>
  <Field name="cemail" component={TextField} floatingLabelText="Email"/>
</div>
<div>
  <Field name="vname" component={TextField} floatingLabelText="Venue/Vendor Name"/>
</div>
<div>
  <Field name="timeslot" component={SelectField} floatingLabelText="Time of Tour">
    <MenuItem value="AM" primaryText="AM"/>
    <MenuItem value="PM" primaryText="PM"/>
  </Field>
</div>
*/
