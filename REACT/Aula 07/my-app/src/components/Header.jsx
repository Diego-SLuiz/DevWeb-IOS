import NewTask from "./NewTask";

function Header ( { title } )
{
    return (
        <div className="header card">
            <h1>{ title }</h1>
            <div>
                <NewTask/>
            </div>
        </div>
    )
}

export default Header;
