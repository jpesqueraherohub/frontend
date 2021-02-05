import React from 'react'
// import { useState } from 'react'

import Button from './Button'
import Profile from './Profile'

class Body extends React.Component {

    constructor() {
        super();

        this.state = {
            // fnameValue: '',
            // lnameValue: '',
            // emailValue: '',
            // contactValue: '',
            showForm: '',
            profile: [
                {
                    id: 1,
                    fname: 'Anton1',
                    lname: 'Diops',
                    email: 'adiopen@gmail.com',
                    contact: '09922222222'
                },
                {
                    id: 2,
                    fname: 'Anton2',
                    lname: 'Diops',
                    email: 'adiopen@gmail.com',
                    contact: '09922222222'
                },
                {
                    id: 3,
                    fname: 'Anton3',
                    lname: 'Diops',
                    email: 'adiopen@gmail.com',
                    contact: '09922222222'
                },
            ],
            dataProfile: [],
            items: []
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        const showMe = true
        // const {lnameValue, fnameValue, emailValue, contactValue} = this.state;
    
        const dataProfile  = {
            firstname: event.target.fname.value,
            lastname: event.target.lname.value,
            email: event.target.email.value,
            contact: event.target.contactNo.value,
            age: event.target.age.value
        }
        event.preventDefault();

        let {items} = this.state;

        items.push(dataProfile)
        this.setState({
            dataProfile:items,
            showForm:showMe
        })

        // console.log(items);
      }

    render() {
        
        const { 
            dataProfile,
            showForm
            } = this.state;
            
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <p>
                         <label>First Name:</label>
                            <input 
                                type="text"
                                name="fname"
                            > 
                            </input>
                 </p>
                 <p>
                         <label>Last Name:</label>
                            <input 
                                type="text"
                                name="lname"
                            >
                            </input>
                 </p>
                 <p>
                         <label>Email:</label>
                            <input 
                                name='email'
                                type='text'
                            >
                            </input>
                 </p>
                 <p>
                         <label>Contact No:</label>
                            <input 
                                name='contactNo'
                                type='numeric'
                            >
                            </input>
                 </p>
                 <p>
                         <label>Age</label>
                            <input 
                                name='age'
                                type='numeric'
                            >
                            </input>
                 </p>
                 <p style={{textAlign:'center'}}>
                 <Button 
                    // enable={false}
                    // onClick= {this.onClick}
                    color = 'green' 
                    text = 'Submit'
                    type= 'submit'
                    >
                    </Button>
                 </p>
                </form>
                {
                     (showForm === true)  ?  
                     <Profile 
                        profileList= {dataProfile}
                     /> 
                     : ''
                 }
            </div>
        )
    }

}

export default Body;

