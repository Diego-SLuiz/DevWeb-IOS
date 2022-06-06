import { Component } from 'react';

class Exemplo extends Component {

    constructor ( props )
    {
        super( props );
        this.state = { contador: 0 };
    }

    render ()
    {
        return (
            <div>
                <p>Você clicou {this.state.contador} vezes</p>
                <button onClick={ () => this.setState( { contador: this.state.contador + 1 } ) }>
                    Clique Aqui
                </button>
            </div>
        );
    }
}

export default Exemplo;
