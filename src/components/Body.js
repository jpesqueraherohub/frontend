import React from 'react'

import Button from './Button'
import Profile from './Profile'

class Body extends React.Component {

    constructor() {
        super();

        const Add = 'Add';

        this.state = {
            showForm: '',
            dataProfile: [],
            items: [],
            buttonFunction: Add
            // fname: '',
            // lname: '',
            // email: '',
            // contact: '',
            // age: ''
        };
    }

    handleSubmit = (event) => {

        const dataProfile  = {
            firstname: event.target.fname.value,
            lastname: event.target.lname.value,
            email: event.target.email.value,
            contact: event.target.contactNo.value,
            age: event.target.age.value
        }

        let {items, buttonFunction, index} = this.state;

        if (buttonFunction === 'Add'){

            const showMe = true
        
            event.preventDefault();

            items.push(dataProfile)
            
            event.target.reset();
            
            this.setState({
                dataProfile:items,
                showForm:showMe
            })
        }
        else {
            items[index]= dataProfile;
            console.log(items)

            this.setState({
                items
            })
            event.preventDefault();
        }
        
      }

    render() {
        
        const { 
            dataProfile,
            showForm,
            fname,
            lname,
            email,
            contact,
            age
            } = this.state;

        const handleDelete = (index) => {
            dataProfile.splice(index,1);
            this.setState({
                dataProfile
            })
        }

        const handleEdit = (index, selectedProfile) => {
            const edit = 'edit';

              this.setState({
                fname: selectedProfile.firstname,
                lname: selectedProfile.lastname,
                email: selectedProfile.email,
                contact: selectedProfile.contact,
                age: selectedProfile.age,
                buttonFunction: edit,
                index
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
                                defaultValue= {fname}   
                            > 
                            </input>
                 </p>
                 <p>
                         <label>Last Name:</label>
                            <input 
                                type="text"
                                name="lname"
                                defaultValue= {lname}   
                            >
                            </input>
                 </p>
                 <p>
                         <label>Email:</label>
                            <input 
                                name='email'
                                type='text'
                                defaultValue= {email}   
                            >
                            </input>
                 </p>
                 <p>
                         <label>Contact No:</label>
                            <input 
                                name='contactNo'
                                type='numeric'
                                defaultValue= {contact}   
                            >
                            </input>
                 </p>
                 <p>
                         <label>Age</label>
                            <input 
                                name='age'
                                type='numeric'
                                defaultValue= {age}   
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

