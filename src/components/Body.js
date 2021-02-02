import React from 'react'
import { useState } from 'react'

import Button from './Button'
import Profile from './Profile'


const Body = ({ color, text }) => {

    const [fnameValue, setFnameValue] = React.useState('');
    const [lnameValue, setlnameValue] = React.useState('');

    const onClick = () => {
        console.log(fnameValue)
        console.log(lnameValue)
    }

    const onChangeHandler = event => {
        setFnameValue(event.target.value);
        setlnameValue(event.target.value);
      };

    return (
        <div>
           <p>
               <label>First Name:</label>
               <input 
                type="text"
                name="fname"
                onChange={onChangeHandler}
                value={fnameValue}
               ></input>
           </p>
           <p>
               <label>Last Name:</label>
               <input 
                type="text"
                name="lname"
                onChange={onChangeHandler}
                value={lnameValue}
               ></input>
           </p>
           <p>
               <label>Email:</label>
               <input name='email'></input>
           </p>
           <p>
               <label>Contact No:</label>
               <input name ='contactNo'></input>
           </p>
           <p style={{textAlign:'center'}}>
           <Button 
            enable={false}
            onClick= {onClick}
            color = 'green' 
            text = 'Submit'
            >
            </Button>
           </p>
        </div>
    )
}

export default Body
