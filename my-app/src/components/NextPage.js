import React, { Component } from 'react'

export default class NextPage extends Component {
  render() {
    return (
      <div>
        <h1>First Name: {this.props.location.state.firstname}</h1>
        <h1>Last Name: {this.props.location.state.lastname}</h1>
        <h1>Email: {this.props.location.state.email}</h1>
        <h1>Contact Number: {this.props.location.state.contact}</h1>
      </div>
    )
  }
}