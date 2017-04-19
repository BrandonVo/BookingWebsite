import { connect } from 'react-redux'
import {AllTours} from '../../components'
import React from 'react'
import { viewTour } from '../../actions'

class AllToursContainer extends React.Component {
  render() {
    return (
      <div>
      <center><AllTours {...this.props}/></center>
            </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  viewTour: () => dispatch(viewTour()),
})

export default connect(
  null,
  mapDispatchToProps,
)(NewTourContainer)
