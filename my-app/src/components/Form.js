import React, { Component } from 'react'
import Table from './Table'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
			items:[]
    };
	} 

  onFinish = (event) =>{
    const data = {
        firstname: event.target.first.value,
        lastname: event.target.last.value,
        email: event.target.mail.value,
        contact: event.target.contact.value,
        age: event.target.age.value
    }
    event.preventDefault() 
    const {items} = this.state
    items.push(data)
    this.setState({
      data:items
    })
  }
  
  render() {  
    const {items} = this.state
    return (
      <div>
        <form onSubmit={this.onFinish}> 
          <label>
            First Name:
            <input type="text" name='first'/>
          </label>
          <label>
            Last Name:
            <input type="text" name='last'/>
          </label>
          <label>
            Email:
            <input type="text" name='mail' />
          </label>
          <label>
            Contact:
            <input type="text" name='contact' type="number"/>
          </label> 
          <label>
            Age:
            <input type="text" name='age' type="number"/>
          </label>        
          <button>Submit</button>
        </form>
        <Table items={items}/>
      </div>
    )
  }
}
