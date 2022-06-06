import { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component
{
    constructor ( props )
    {
        super( props );
    }

    render ()
    {
        return (
            <div>
                <h1>Olá, {this.props.nome}, seja bem-vindo</h1>
            </div>
        )
    }
}

Header.defaultProps = { nome: "Usuário" };
Header.propTypes = { nome: PropTypes.string };

export default Header;
