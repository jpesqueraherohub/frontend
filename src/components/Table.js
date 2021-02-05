import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

export class Table extends Component {
    render() {
        
        let profileList= this.props.profileList;
        console.log(profileList)

        return (
            <div className="Table">
            <table style={{width: '100%', textAlign: 'center'}}>
              <tbody>
                <tr >
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th>Age</th>
                  <th>Edit/Delete</th>
                </tr>
                {/* {profileList.map(item => { */}
                {profileList.map(function(item,i){
                  return (
                    <tr key={i}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.age}</td>
                      <td>
                          <Button text='Edit'></Button> 
                          <Button text='Delete'></Button> 
                      </td> 
                    </tr>
                  );
                })}
              </tbody>
            </table>
            table
          </div>
        )
    }
}

Table.propTypes = {
    profileList: PropTypes.array.isRequired
}

export default Table
