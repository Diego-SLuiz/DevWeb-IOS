import NewTask from "./NewTask";

function Header ( { title } )
{
    return (
        <div className="header card">
            <h1 className="header-title">{ title }</h1>
            <div className="header-buttons">
                <NewTask/>
            </div>
        </div>
    )
}

export default Header;
