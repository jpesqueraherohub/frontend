import React, { Component } from 'react'

export default class Profile extends Component {

    render() {
        return (
            <div>
                <p>
                    My name is {this.props.fname} {this.props.lname}
                </p>
                <p>
                    My Email is {this.props.email}
                </p>
                <p>
                    My Contact No is {this.props.contact}
                </p>
            </div>
        )
    }
}
