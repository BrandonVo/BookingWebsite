import { connect } from 'react-redux'
import {UpdateCompanyForm} from '../../components'
import React from 'react'
import { updateCompany } from '../../actions'
import { initialize } from 'redux-form'

class UpdateCompanyContainer extends React.Component {
  render() {
    return (
      <div>
      <center><UpdateCompanyForm {...this.props}/></center>
            </div>
    )
  }

  componentDidMount() {
    const initialFormData = {
      cnumber: this.props.selected.cnumber,
      companyName: this.props.selected.cname,
      email: this.props.selected.cemail,
      description: this.props.selected.cdescription,
      phone: this.props.selected.cphone
    }

    this.props.initialize('updatecompanyform', initialFormData)
  }
}


UpdateCompanyContainer.propTypes = {
  initialize: React.PropTypes.func,
  selected: React.PropTypes.object,
  cnumber: React.PropTypes.string,
  cname: React.PropTypes.string,
  cemail: React.PropTypes.string,
  cdescription: React.PropTypes.string,
  cphone: React.PropTypes.string,
}

const mapDispatchToProps = (dispatch) => ({
  updateCompany: () => dispatch(updateCompany()),
  initialize: (form, data) => dispatch(initialize(form, data)),
})

const mapStateToProps = (state) => {
  const {
    selected
  } = state.companyForm
  return {
    selected
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateCompanyContainer)
