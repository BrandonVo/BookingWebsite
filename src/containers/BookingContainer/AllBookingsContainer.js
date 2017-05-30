import { connect } from 'react-redux'
import React from 'react'
import Promise from 'promise'
import { viewBookings, selectBooking, deleteBooking } from '../../actions'
import { browserHistory } from 'react-router'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
/* eslint no-console: 0 */
class AllBookingsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyDisplayed: this.props.items
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }


  componentDidMount(){
    Promise.resolve(this.props.viewBookings()).then(
      () => this.setState({currentlyDisplayed: this.props.items})
    )
  }


  onSelectChange(key) {
    var selected = this.state.currentlyDisplayed[key]
    this.props.selectBooking(selected)
  }

  onEdit(){

    browserHistory.push('/updateBooking')
  }

  onSearchChange(event) {
    var newDisplayed = this.props.items.filter((item) => item.cname.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.cemail.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.vname.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.eventdate.includes(event.target.value.toLowerCase()) ||
      item.price == event.target.value ||
      item.tnumber == event.target.value
    )
    if (event.target.value == ''){
      newDisplayed = this.props.items
    }
    this.setState({
      currentlyDisplayed: newDisplayed
    })
  }

  onDelete(){
    this.props.deleteBooking()
    Promise.resolve(this.props.viewBookings()).then(
      () => this.setState({currentlyDisplayed: this.props.items})
    )
  }

  render() {
    return (
      <div>
      <div align="left">
        <TextField
          id='search'
          hintText='Search'
          onChange={this.onSearchChange}
        />

      </div>
      <div>
        <center>
        <h2>Bookings</h2>
        {this.props.isFetching && this.props.items.length === 0 &&
          <h2>Loading...</h2>
        }
        <Table
          height= "500px"
          fixedHeader= {true}
          fixedFooter= {false}
          selectable= {true}
          multiSelectable= {false}
          onRowSelection={this.onSelectChange}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Venue/Vendor</TableHeaderColumn>
              <TableHeaderColumn>Event Date</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          >
            {this.state.currentlyDisplayed.map((item, i) =>
              <TableRow key={i} value={item}>
                <TableRowColumn>{item.bnumber}</TableRowColumn>
                <TableRowColumn>{item.cname}</TableRowColumn>
                <TableRowColumn>{item.cemail}</TableRowColumn>
                <TableRowColumn>{item.vname}</TableRowColumn>
                <TableRowColumn>{item.eventdate.substring(0, 10)}</TableRowColumn>
                <TableRowColumn>{item.price}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <FlatButton label="Edit"
          onTouchTap={this.onEdit}
        />
        <FlatButton
          label="Delete"
          secondary={true}
          onTouchTap={this.onDelete}
        />
        </center>
      </div>
      </div>
    )
  }
}

AllBookingsContainer.propTypes = {
  viewBookings: React.PropTypes.func.isRequired,
  selectBooking: React.PropTypes.func.isRequired,
  deleteBooking: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
}

const mapStateToProps = (state) => {
  const {
    isFetching,
    items,
    selected
  } = state.bookingForm


  return {
    isFetching,
    items,
    selected
  }
}

const mapDispatchToProps = (dispatch) => ({
  viewBookings: () => dispatch(viewBookings()),
  deleteBooking: () => dispatch(deleteBooking()),
  selectBooking: (selectedBooking) => dispatch(selectBooking(selectedBooking)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllBookingsContainer)
