import PropTypes from "prop-types";

function Header ( { title } )
{
    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
        </header>
    )
}

Header.PropTypes = { title: PropTypes.string.isRequired };
Header.defaultProps = { title: "Compromissos" };

export default Header;
