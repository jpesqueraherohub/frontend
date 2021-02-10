
import React, { Component } from 'react'
import Table from './Table'
import PropTypes from 'prop-types'

export class Profile extends Component {
    
    render() {
        
        const {profileList, handleDelete, handleEdit} =this.props;

        return (
            <div>
                <Table 
                    profileList= {profileList} 
                    handleDelete= {handleDelete}
                    handleEdit= {handleEdit}
                />
            </div>
        );
    }
}

Profile.propTypes = {
    profileList: PropTypes.array.isRequired
}

export default Profile