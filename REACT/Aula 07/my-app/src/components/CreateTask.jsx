import { FaTimes, FaPlusCircle } from "react-icons/fa";

function CreateTask ( { onClose } )
{
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
                            <input type="text" className="task-name"/>
                        </div>

                        <div className="input-field">
                            <label className="input-title">Descrição</label>
                            <textarea rows="6" className="task-description"></textarea>
                        </div>

                        <div className="input-field">
                            <label className="input-title">Data</label>
                            <input type="date" className="task-date"/>
                        </div>

                        <div className="input-field">
                            <label className="input-title">Hora</label>
                            <input type="time" className="task-time"/>
                        </div>

                        <button type="button"><FaPlusCircle/> Adicionar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;
