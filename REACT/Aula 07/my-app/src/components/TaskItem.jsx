import { FaTimes, FaToggleOn, FaToggleOff } from "react-icons/fa";

const monthNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
const weekDays = [ "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado" ];

function TaskItem ( { task, onToggle, onDelete } )
{
    // Converter data para dias da semana e converter nome de meses
    let monthName = monthNames[ task.date.getMonth() ];
    let weekDay = weekDays[ task.date.getDay() ];
    let day = String( task.date.getDate() ).padStart( 2, "0" );
    let hour = String( task.date.getHours() ).padStart( 2, "0" );
    let minutes = String( task.date.getMinutes() ).padStart( 2, "0" );

    // Ícone que será renderizado
    let toggleOn = <span className="item-button"><FaToggleOn size={32} onClick={ () => onToggle( task ) }/></span>;
    let toggleOff = <span className="item-button"><FaToggleOff size={32} onClick={ () => onToggle( task ) }/></span>;
    let closeButton = <span className="item-button"><FaTimes size={32} color="red" onClick={ () => onDelete( task ) }/></span>;

    return (
        <li className={ "task-item " + task.status }>
            <div className="item-content">
                <h3 className="item-title">{ task.name }</h3>
                <p className="item-text">{ task.description }</p>
                <p className="item-text">{ `Dia ${day} de ${monthName} (${weekDay}) - ${hour}:${minutes}` }</p>
            </div>

            <div className="item-buttons">
                { task.status == "pending" ? toggleOff : toggleOn }
                { closeButton }
            </div>
        </li>
    )
}

export default TaskItem;
