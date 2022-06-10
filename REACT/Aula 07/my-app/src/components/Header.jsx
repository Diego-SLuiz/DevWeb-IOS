import NewTask from "./NewTask";

function Header ( { title, onCreate } )
{
    return (
        <div className="header card">
            <h1 className="header-title">{ title }</h1>
            <div className="header-buttons">
                <NewTask onCreate={ onCreate }/>
            </div>
        </div>
    )
}

export default Header;
