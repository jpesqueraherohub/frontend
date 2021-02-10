import React from 'react'

import Button from './Button'
import Profile from './Profile'

class Body extends React.Component {

    constructor() {
        super();

        this.state = {
            showForm: '',
            dataProfile: [],
            items: []
        };
    }

    handleSubmit = (event) => {
        const showMe = true
    
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
        
        event.target.reset();
        
        this.setState({
            dataProfile:items,
            showForm:showMe
        })
      }

    render() {
        
        const { 
            dataProfile,
            showForm
            } = this.state;

        const handleDelete = (index) => {
            dataProfile.splice(index,1);
            this.setState({
                dataProfile
            })
        }

        const handleEdit = (index) => {
            // console.log(index)
            const newState = dataProfile.map((item, i) => {
                if (i == index) {
                  return {...item};
                }
                return item;
              });
          
              this.setState({
                dataProfile: newState
              });
        }

        
            
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
                        handleDelete= {handleDelete}
                        handleEdit= {handleEdit}
                     /> 
                     : ''
                 }
            </div>
        )
    }

}

export default Body;

