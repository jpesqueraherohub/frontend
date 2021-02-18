import React from 'react';
import ButtonSubmit from '../components/Button';

import {Form, Card, Input, Table, Button } from 'antd';


export class Profile extends React.Component {

    formRef = React.createRef();

    constructor() {
        super();

        const Add = 'Add';

        this.state = {
            showForm: '',
            dataProfile: [],
            items: [],
            buttonFunction: Add
        };
    }

    handleSubmit = (details) => {

        const {items, buttonFunction, index} = this.state;

        if (buttonFunction === 'Add'){

            const showMe = true

            items.push(details);
            
            this.setState({
                items,
                showForm:showMe
            })
        }
        else {
            items[index]= details;

            this.setState({
                items
            })
            // event.preventDefault();
            // alert('edit');
            console.log(items)
        }
        
      }

    handleReset = () => {
        this.props.form.resetFields();
      };

    render() {
        
        const { 
            showForm,
            items
            } = this.state;
            
            console.log(items);

            const tableColumns = [
                {
                  title: 'First Name',
                  dataIndex: 'fname',
                //   key: 'fname',
                },
                {
                  title: 'Last Name',
                  dataIndex: 'lname',
                //   key: 'lname',
                },
                {
                  title: 'Email Address',
                  dataIndex: 'email',
                //   key: 'email',
                },
                {
                    title: 'Contact',
                    dataIndex: 'contact',
                    // key: 'contact',
                  },
                  {
                    title: 'Age',
                    dataIndex: 'age',
                    // key: 'age',
                  },
                  {
                    title: 'Action',
                    dataIndex: 'action',
                    render: (selectedProfile,record,index) => (
                        <div>
                            <Button onClick= {() => handleEdit(record,index)} >Edit</Button>
                            <Button onClick= {() => handleDelete()} >Delete</Button>
                        </div>
                    ),
                  },
              ];

        const handleDelete = (index) => {

            items.splice(index,1);
            this.setState({
                items
            })

        }

        const tableData = items.map((dataItems, i) => ({
            key: i,
            fname: dataItems.fname,
            lname: dataItems.lname,
            email: dataItems.email,
            contact: dataItems.contact,
            age: dataItems.age

          }));

        const handleEdit = (record,index) => {
            const edit = 'edit';
            
            this.formRef.current.setFieldsValue({
                fname: record.fname,
                lname: record.lname,
                email: record.email,
                contact: record.contact,
                age: record.age,
              });

              this.setState({
                buttonFunction: edit,
                index
            })
              
        }
        return (
                <div className="site-card-border-less-wrapper">
                    <Card title="Profile" bordered={true} style={{ width: '95%', alignItems: 'center'}}>
                    <Form  
                        ref={this.formRef}
                        onFinish={this.handleSubmit}
                    >
                        <Form.Item 
                            name="fname"
                            label= 'First Name'
                        >
                            <Input /> 
                        </Form.Item>
                        <Form.Item 
                            name="lname" 
                            label= 'First Name'
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                             name="email" 
                             label= 'Email'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                             name="contact" 
                             label= 'Contact Number'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                             name="age" 
                             label= 'Age'
                        >
                        <Input />
                        </Form.Item>
                            <ButtonSubmit 
                                color = 'green' 
                                text = 'Submit'
                                htmlType= 'submit'
                            >
                            </ButtonSubmit>
                            {
                                (showForm === true)  ?  
                                <Table
                                    columns={tableColumns} 
                                    dataSource={tableData}
                                ></Table>
                                : ''
                            }
                        </Form>
                    </Card>
                </div>
        )
    }
}

export default Profile
