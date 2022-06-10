import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import CreateTask from "./CreateTask";

function NewTask ( { onCreate } )
{
    const [ displayModal, setDisplayModel ] = useState( false )

    // Mostrar janela para criação de tarefa
    function openModal ()
    {
        setDisplayModel( true );
    }

    // Ocultar janela para criação de tarefa
    function closeModal ()
    {
        setDisplayModel( false );
    }

    // Componente que será renderizado
    let addIcon = <FaPlusCircle size={32} color="#3489eb"/>;

    return (
        <div>
            <span onClick={ openModal } className="button-title header-button">{addIcon} Criar</span>
            { displayModal ? <CreateTask onCreate={ onCreate } onClose={ closeModal }/> : null }
        </div>
    )
}

export default NewTask;
