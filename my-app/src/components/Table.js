import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Table extends Component {
render() {
    const items = this.props.items;
    function onEdit() {
     console.log('Harry Edit')
    }

    function onDelete() {
      console.log('Harry Delete')
    }

    function Panel() {
      return (
        items.map(function(d,i){
          return (
            <tr key={i}>
              <td>{d.firstname}</td>
              <td>{d.lastname}</td>
              <td>{d.email}</td>
              <td>{d.contact}</td>
              {
                d.age <= 18
                ? 
                  (		
                    <td style={{color: "green"}}>{d.age}</td>
                  )	
                :
                  (
                    <td>{d.age}</td>
                  )
              }
              <tr>
                <td>
                  <button onClick={() => onEdit()}>EDIT</button>
                </td>
                <td>
                  <button onClick={() => onDelete()}>DELETE</button>
                </td>
              </tr>
            </tr>
          )
        })
      );
    }
    
    return ( 
      <div>
        <table> 
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>  
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <Panel/>
          </tbody>
        </table>
      </div>
    )
  }
}
Table.propTypes = {
  items: PropTypes.shape({
    firstname:PropTypes.string,
    lastname:PropTypes.string,
    email:PropTypes.string,
    contact:PropTypes.number,
    age:PropTypes.number,
  })
}
