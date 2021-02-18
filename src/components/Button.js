import { Button } from 'antd';

import PropTypes from 'prop-types'

const SubmitButton = ({ color, text, onClick }) => {
       
    return (
    <Button 
        onClick ={onClick}
        type="primary" 
        htmlType="submit"
        // style={{backgroundColor: color}}
        className = 'btn'
    >
            {text}
    </Button>
    )
}

SubmitButton.defaultProps = {
    color : 'black',
}

SubmitButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default SubmitButton
