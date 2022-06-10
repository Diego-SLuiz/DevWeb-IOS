import { FaTimes, FaPlusCircle } from "react-icons/fa";


function CreateTask ( { onCreate, onClose } )
{
    function createNewTask ( onClose )
    {
        // Pegar valores inseridos no formulário
        let name = document.getElementById( "task-name" ).value;
        let description = document.getElementById( "task-description" ).value;
        let day = document.getElementById( "task-date" ).value;
        let hour = Number( document.getElementById( "task-time" ).value.slice( 0, 2 ) );
        let minutes = Number( document.getElementById( "task-time" ).value.slice( 3, 5 ) );

        // Criar uma nova data e hora
        let date = new Date( day );
        date.setHours( hour, minutes )

        // Criar novo objeto task
        let task =
        {
            // id: 3,
            name: name,
            description: description,
            date: date,
            status: "pending",
        }

        // Adicionar task e fechar a janela de nova task
        onCreate( task );
        onClose();
    }

    return (
        <div>
            <div className="modal-background" onClick={ onClose }></div>
            <div className="modal-content card">
                <div className="modal-header">
                    <h1>Criar Tarefa</h1>
                    <span className="modal-close"><FaTimes size={ 32 } color="red" onClick={ onClose }/></span>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="input-field">
                            <label className="input-title">Título</label>
                            <input type="text" id="task-name" className="task-input"/>
                        </div>

                        <div className="input-field">
                            <label className="input-title">Descrição</label>
                            <textarea rows="4" id="task-description" className="task-input"></textarea>
                        </div>

                        <div className="input-datetime">
                            <div className="input-field">
                                <label className="input-title">Data</label>
                                <input type="date" id="task-date" className="task-input"/>
                            </div>

                            <div className="input-field">
                                <label className="input-title">Hora</label>
                                <input type="time" id="task-time" className="task-input"/>
                            </div>
                        </div>

                        <button onClick={ () => createNewTask( onClose ) } className="task-confirm" type="button">Adicionar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;
