import PropTypes from 'prop-types'

const ButtonDelete = ({ color, text, handleRemoveRow }) => {

    return (
    <button 
        onClick ={handleRemoveRow}
        style={{backgroundColor: color}}
        className = 'btn'>
            {text}
    </button>
    )
}

ButtonDelete.defaultProps = {
    color : 'black',
}

ButtonDelete.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    item: PropTypes.string,
    handleRemoveRow: PropTypes.func,
}


export default ButtonDelete
