function addStudent ()
{
    const studentForm = document.getElementById( "student-form" );
    const studentContent = document.getElementById( "student-content" );
    const userInput = studentForm.getElementsByTagName( "input" );
    const studentRow = document.createElement( "tr" );

    for ( let i = 0; i < userInput.length; i ++ )
    {
        let studentData = document.createElement( "td" );
        studentData.innerText = userInput[i].value

        studentRow.appendChild( studentData );
        userInput[i].value = "";
    } 

    studentContent.appendChild( studentRow );
    console.log( userInput )
}

const studentConfirm = document.getElementById( "student-confirm" );
studentConfirm.addEventListener( "click", addStudent );
 