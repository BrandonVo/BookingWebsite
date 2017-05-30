import { connect } from 'react-redux'
import {UpdateTourForm} from '../../components'
import React from 'react'
import { updateTour } from '../../actions'
import { initialize } from 'redux-form'

class UpdateTourContainer extends React.Component {
  render() {
    return (
      <div>
      <center><UpdateTourForm {...this.props}/></center>
            </div>
    )
  }

  componentDidMount() {
    let names = this.props.selected.cname.split(' ')
    let dateStr = this.props.selected.tourdate
    let day = parseInt(dateStr.substring(8,10))
    let month = parseInt(dateStr.substring(5,7))
    let year = parseInt(dateStr.substring(0,4))
    let date = new Date(year, month - 1, day)
    const initialFormData = {
      tnumber: this.props.selected.tnumber,
      firstName: names[0],
      lastName: names[1],
      email: this.props.selected.cemail,
      vName: this.props.selected.vname,
      timeslot: this.props.selected.timeslot,
      tourDate: date
    }

    this.props.initialize('updatetourform', initialFormData)
  }
}


UpdateTourContainer.propTypes = {
  initialize: React.PropTypes.func,
  selected: React.PropTypes.object,
  tnumber: React.PropTypes.string,
  cname: React.PropTypes.string,
  cemail: React.PropTypes.string,
  vname: React.PropTypes.string,
  timeslot: React.PropTypes.string,
  tourdate: React.PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  updateTour: () => dispatch(updateTour()),
  initialize: (form, data) => dispatch(initialize(form, data)),
})

const mapStateToProps = (state) => {
  const {
    selected
  } = state.tourForm
  return {
    selected
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateTourContainer)
