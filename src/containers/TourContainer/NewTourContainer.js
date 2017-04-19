import { connect } from 'react-redux'
import {TourForm} from '../../components'
import React from 'react'
import { addTour } from '../../actions'

class NewTourContainer extends React.Component {
  render() {
    return (
      <div>
      <center><TourForm {...this.props}/></center>
            </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addTour: () => dispatch(addTour()),
})

export default connect(
  null,
  mapDispatchToProps,
)(NewTourContainer)
