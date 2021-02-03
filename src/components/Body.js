import React from 'react'
import { useState } from 'react'

import Button from './Button'
import Profile from './Profile'

class Body extends React.Component {

    constructor() {
        super();

        this.state = {
            fnameValue: '',
            lnameValue: '',
            emailValue: '',
            contactValue: '',
            showForm: ''
        };
    }

    onClick = () => {
        const showMe = true
        this.setState({showForm:showMe})
        const { fnameValue, lnameValue,emailValue,contactValue } = this.state;
        console.log(fnameValue,lnameValue,emailValue,contactValue)
    }

    onChangeFnameHandler = event => {
        this.setState({ fnameValue: event.target.value }); // Anton
    };

    onChangeLnameHandler = event => {
        this.setState({ lnameValue: event.target.value }); // Diopoenes
    };

    onChangeEmailHandler = event => {
        this.setState({ emailValue: event.target.value }); // Diopoenes
    };

    onChangeContactHandler = event => {
        this.setState({ contactValue: event.target.value }); // Diopoenes
    };

    render() {
        const { 
            fnameValue, 
            lnameValue, 
            emailValue, 
            contactValue,
            showForm
            } = this.state;
    
        return (
            <div>
                 <p>
                         <label>First Name:</label>
                            <input 
                                type="text"
                                name="fname"
                                onChange={this.onChangeFnameHandler}
                                value={fnameValue}
                            > 
                            </input>
                 </p>
                 <p>
                         <label>Last Name:</label>
                            <input 
                                type="text"
                                name="lname"
                                onChange={this.onChangeLnameHandler} // Diopenes
                                value={lnameValue}
                            >
                            </input>
                 </p>
                 <p>
                         <label>Email:</label>
                            <input 
                                name='email'
                                type='text'
                                onChange={this.onChangeEmailHandler}
                                value={emailValue}
                            >
                            </input>
                 </p>
                 <p>
                         <label>Contact No:</label>
                            <input 
                                name='contactNo'
                                type='numeric'
                                onChange={this.onChangeContactHandler}
                                value={contactValue}
                            >
                            </input>
                 </p>
                 <p style={{textAlign:'center'}}>
                 <Button 
                    enable={false}
                    onClick= {this.onClick}
                    color = 'green' 
                    text = 'Submit'
                    >
                    </Button>
                 </p>
                 {
                     (showForm === true)  ?  
                     <Profile 
                        fname={fnameValue}
                        lname={lnameValue}
                        email={emailValue}
                        contact={contactValue}
                     /> 
                     : ''
                 }
            </div>
        )
    }

}

export default Body;

