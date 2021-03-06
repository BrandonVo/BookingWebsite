import { connect } from 'react-redux'
import React from 'react'
import Promise from 'promise'
import { viewTours, selectTour, deleteTour } from '../../actions'
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
class AllToursContainer extends React.Component {
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
    Promise.resolve(this.props.viewTours()).then(
      () => this.setState({currentlyDisplayed: this.props.items})
    )
  }


  onSelectChange(key) {
    var selected = this.state.currentlyDisplayed[key]
    this.props.selectTour(selected)
  }

  onEdit(){

    browserHistory.push('/updateTour')
  }

  onSearchChange(event) {
    var newDisplayed = this.props.items.filter((item) => item.cname.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.cemail.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.vname.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.tourdate.includes(event.target.value.toLowerCase()) ||
      item.timeslot.toLowerCase().includes(event.target.value.toLowerCase()) ||
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
    this.props.deleteTour()
    Promise.resolve(this.props.viewTours()).then(
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
        <h2>Tours</h2>
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
              <TableHeaderColumn>Tour Date</TableHeaderColumn>
              <TableHeaderColumn>Timeslot</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          >
            {this.state.currentlyDisplayed.map((item, i) =>
              <TableRow key={i} value={item}>
                <TableRowColumn>{item.tnumber}</TableRowColumn>
                <TableRowColumn>{item.cname}</TableRowColumn>
                <TableRowColumn>{item.cemail}</TableRowColumn>
                <TableRowColumn>{item.vname}</TableRowColumn>
                <TableRowColumn>{item.tourdate.substring(0, 10)}</TableRowColumn>
                <TableRowColumn>{item.timeslot}</TableRowColumn>
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

AllToursContainer.propTypes = {
  viewTours: React.PropTypes.func.isRequired,
  selectTour: React.PropTypes.func.isRequired,
  deleteTour: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
}

const mapStateToProps = (state) => {
  const {
    isFetching,
    items,
    selected
  } = state.tourForm


  return {
    isFetching,
    items,
    selected
  }
}

const mapDispatchToProps = (dispatch) => ({
  viewTours: () => dispatch(viewTours()),
  deleteTour: () => dispatch(deleteTour()),
  selectTour: (selectedTour) => dispatch(selectTour(selectedTour)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllToursContainer)
