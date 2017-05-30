import React from 'react'
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

const AllTours = ({isFetching, items, selected}) => {
  return (
    <div>
    <div align="left">
      <TextField
        id='search'
      />

    </div>
    <div>
      <center>
      {isFetching && items.length === 0 &&
        <h2>Loading...</h2>
      }
      <Table
        height= "300px"
        fixedHeader= {true}
        fixedFooter= {false}
        selectable= {true}
        multiSelectable= {false}
        onRowSelection=
          {(key) => {
            selected = items[key]
            console.log(selected)
          }}
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
          {items.map((item, i) =>
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
      <FlatButton label="Edit" />
      <FlatButton label="Delete" secondary={true} />
      </center>
    </div>
    </div>
  )
}

AllTours.propTypes = {
  isFetching: React.PropTypes.bool,
  items: React.PropTypes.array,
  selected: React.PropTypes.object,
}

export default AllTours
