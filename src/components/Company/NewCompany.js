import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import Dropzone from 'react-dropzone'

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

const renderDropzoneInput = (field) => {
  const files = field.input.value
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file) => <div><p>{file.name}</p> <img src={file.preview}/></div>) }
        </ul>
      )}
    </div>
  )
}



const CompanyForm = ({addCompany, handleSubmit, pristine, reset, submitting}) => {
  return (
    <form onSubmit={handleSubmit(addCompany)}>
    <div>
      <h2>Create a New Company</h2>
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
      <div>
        <p>Company Logo</p>
        <Field name="logoFile" component={renderDropzoneInput} label="Company Logo"/>
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

CompanyForm.propTypes = {
  addCompany: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func,
  submitting: React.PropTypes.bool,
}


export default reduxForm({
  form: 'companyform',  // a unique identifier for this form
  validate,
})(CompanyForm)
