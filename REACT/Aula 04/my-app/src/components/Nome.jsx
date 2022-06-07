import PropTypes from "prop-types";
import { useState } from "react";

function Nome ( { aluno } )
{
    const [ nome, setNome ] = useState( aluno );

    return (
        <div className="nome">
            <h1>{ nome }</h1>
        </div>
    )
}

Nome.propTypes = { aluno: PropTypes.string };
Nome.defaultProps = { aluno: "Aluno" };

export default Nome;
