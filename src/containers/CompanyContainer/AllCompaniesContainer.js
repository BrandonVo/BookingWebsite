import { connect } from 'react-redux'
import React from 'react'
import Promise from 'promise'
import { viewCompanies, selectCompany, deleteCompany } from '../../actions'
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
class AllCompaniesContainer extends React.Component {
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
    Promise.resolve(this.props.viewCompanies()).then(
      () => this.setState({currentlyDisplayed: this.props.items})
    )
  }


  onSelectChange(key) {
    var selected = this.state.currentlyDisplayed[key]
    this.props.selectCompany(selected)
  }

  onEdit(){

    browserHistory.push('/updateCompany')
  }

  onSearchChange(event) {
    var newDisplayed = this.props.items.filter((item) => item.cname.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.cemail.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.cdescription.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.cphone.includes(event.target.value.toLowerCase()) ||
      item.cnumber == event.target.value
    )
    if (event.target.value == ''){
      newDisplayed = this.props.items
    }
    this.setState({
      currentlyDisplayed: newDisplayed
    })
  }

  onDelete(){
    this.props.deleteCompany()
    Promise.resolve(this.props.viewCompanies()).then(
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
        <h2>Companies</h2>
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
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          >
            {this.state.currentlyDisplayed.map((item, i) =>
              <TableRow key={i} value={item}>
                <TableRowColumn>{item.cnumber}</TableRowColumn>
                <TableRowColumn>{item.cname}</TableRowColumn>
                <TableRowColumn>{item.cdescription}</TableRowColumn>
                <TableRowColumn>{item.cemail}</TableRowColumn>
                <TableRowColumn>{item.cphone}</TableRowColumn>
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

AllCompaniesContainer.propTypes = {
  viewCompanies: React.PropTypes.func.isRequired,
  selectCompany: React.PropTypes.func.isRequired,
  deleteCompany: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
}

const mapStateToProps = (state) => {
  const {
    isFetching,
    items,
    selected
  } = state.companyForm


  return {
    isFetching,
    items,
    selected
  }
}

const mapDispatchToProps = (dispatch) => ({
  viewCompanies: () => dispatch(viewCompanies()),
  deleteCompany: () => dispatch(deleteCompany()),
  selectCompany: (selectedCompany) => dispatch(selectCompany(selectedCompany)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllCompaniesContainer)
