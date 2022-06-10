import { FaTimes } from "react-icons/fa";

function CreateTask ( { onCreate, onClose } )
{
    // Criar novo objeto task
    function createNewTask ( onClose )
    {
        // Validar nome
        let name = document.getElementById( "task-name" ).value;
        name = name.trim().replace( /\s+/, " " ).slice( 0, 50 ) || "Nova Tarefa";

        // Validar descrição
        let description = document.getElementById( "task-description" ).value;
        description = description.trim().replace( /\s+/, " " ).slice( 0, 200 ) || "Descrição da tarefa...";

        // Validar data do dia
        let day = document.getElementById( "task-date" ).value;
        day = new Date( day );
        day.setDate( day.getDate() + 1 );
        day = isNaN( day.getTime() ) ? new Date() : day;

        // Validar hora do dia
        let hour = Number( document.getElementById( "task-time" ).value.slice( 0, 2 ) );
        hour = isNaN( hour ) ? 0 : hour;

        // Validar minuto do dia
        let minutes = Number( document.getElementById( "task-time" ).value.slice( 3, 5 ) );
        minutes = isNaN( minutes ) ? 0 : minutes;

        day.setHours( hour, minutes );

        // Criar tarefa, adicionar e fechar janela de criação
        let task =
        {
            name: name,
            description: description,
            date: day,
            status: "pending",
        }

        onCreate( task );
        onClose();
    }

    return (
        <div>
            <div className="modal-background" onClick={ onClose }></div>
            <div className="modal-content card">
                <div className="modal-header">
                    <h2>Nova Tarefa</h2>
                    <span className="modal-close"><FaTimes size={ 32 } color="red" onClick={ onClose }/></span>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="input-field">
                            <label className="input-title">Título</label>
                            <input type="text" placeholder="Nova Tarefa" id="task-name" className="task-input"/>
                        </div>

                        <div className="input-field">
                            <label className="input-title">Descrição</label>
                            <textarea rows="4" placeholder="Descrição da tarefa..." id="task-description" className="task-input"></textarea>
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
