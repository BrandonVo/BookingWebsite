import { connect } from 'react-redux'
import {CompanyForm} from '../../components'
import React from 'react'
import { addCompany } from '../../actions'

class NewCompanyContainer extends React.Component {
  render() {
    return (
      <div>
      <center><CompanyForm {...this.props}/></center>
            </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addCompany: () => dispatch(addCompany()),
})

export default connect(
  null,
  mapDispatchToProps,
)(NewCompanyContainer)
