import PropTypes from "prop-types";

function Button ( { backgroundColor, text, onClick } )
{
    return (
        <button style={ { backgroundColor: backgroundColor } } onClick={ onClick }>
            {text}
        </button>
    )
}

export default Button;
