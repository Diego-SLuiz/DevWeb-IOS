import PropTypes from "prop-types";
import Button from "./Button";

function Header ( { title } )
{
    const onClick = () => alert( "Clicou!" );

    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
            <Button backgroundColor="green" onClick={ onClick } text="Add"/>
        </header>
    )
}

Header.propTypes = { title: PropTypes.string.isRequired };
Header.defaultProps = { title: "Compromissos" };

export default Header;
