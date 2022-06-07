import PropTypes from "prop-types";

function Nota ( { notas } )
{
    let media = notas.reduce( ( anterior, atual ) => anterior + atual ) / notas.length;
    let color = media < 5 ? "#eb345e" : "#34eb95";

    return (
        <table className="notas">
            <thead className="titulos">
                <tr>
                    <th>Notas</th>
                    <th>Média</th>
                </tr>
            </thead>

            <tbody className="conteudo">
                <tr>
                    <td>{ notas.join( " " ) }</td>
                    <td style={ { color: color } }>{ media }</td>
                </tr>
            </tbody>
        </table>
    )
}

Nota.propTypes = { notas: PropTypes.array.isRequired };
Nota.defaultProps = { notas: [ 5, 5, 5, 5 ] };

export default Nota;
