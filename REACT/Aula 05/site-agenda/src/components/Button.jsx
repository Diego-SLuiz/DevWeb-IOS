import PropTypes from "prop-types";

function Button ( { backgroundColor, text, onClick } )
{
    return (
        <button className="btn" style={ { backgroundColor: backgroundColor } } onClick={ onClick }>
            {text}
        </button>
    )
}

Button.propTypes = { backgroundColor: PropTypes.string, onClick: PropTypes.func, text: PropTypes.string };
Button.defaultProps = { text: "Botão" };

export default Button;
