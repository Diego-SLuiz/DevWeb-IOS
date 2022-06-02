import PropTypes from 'prop-types'

function BoasVindas ( props )
{
    return (
        <section style={ { marginBottom: "1rem", padding: "5px", border: "1px solid black", borderRadius: "4px" } }>
            <h1>Bem-Vindo {props.name}!</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem minima qui dolor ratione omnis aut ipsa corporis ad impedit placeat! Saepe atque dicta quibusdam assumenda architecto perspiciatis facilis sint! Eos!
            </p>
        </section>
    )
}

BoasVindas.propTypes = { name: PropTypes.string };
BoasVindas.defaultProps = { name: "Usuário" };

export default BoasVindas;
