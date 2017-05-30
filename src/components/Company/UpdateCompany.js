import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import { browserHistory } from 'react-router'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'companyName', 'description', 'email', 'phone' ]
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



const UpdateCompanyForm = ({updateCompany, handleSubmit, pristine, submitting}) => {
  return (
    <form onSubmit={handleSubmit(updateCompany)}>
    <div>
      <h2>Update a Company</h2>
    </div>
      <div>
        <Field name="cnumber" component={TextField} disabled={true} floatingLabelText="Number"/>
      </div>
      <div>
        <Field name="companyName" component={TextField} floatingLabelText="Company Name"/>
      </div>
      <div>
        <Field name="description" component={TextField} floatingLabelText="Description Name"/>
      </div>
      <div>
        <Field name="email" component={TextField} floatingLabelText="Email"/>
      </div>
      <div>
        <Field name="phone" component={TextField} floatingLabelText="Phone"/>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" onClick={() => {browserHistory.push('/viewCompanies')}}>Cancel
        </button>
      </div>
    </form>
  )
}

UpdateCompanyForm.propTypes = {
  updateCompany: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
}


export default reduxForm({
  form: 'updatecompanyform',  // a unique identifier for this form
  validate,
})(UpdateCompanyForm)
