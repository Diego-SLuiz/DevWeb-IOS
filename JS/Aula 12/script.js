// Retornar um elemento "tr" com os dados inseridos pelo usuário
function getStudentInput ()
{
    let inputFields = studentForm.getElementsByTagName( "input" )
    let studentRow = document.createElement( "tr" );

    for ( let i = 0; i < inputFields.length; i ++ )
    {
        let studentData = document.createElement( "td" );
        studentData.innerText = inputFields[i].value;
        studentRow.appendChild( studentData );
    }

    return studentRow;
}

// Limpar dados inseridos pelo usuário
function clearStudentInput ()
{
    let inputFields = studentForm.getElementsByTagName( "input" );

    for ( let i = 0; i < inputFields.length; i ++ )
    {
        inputFields[i].value = "";
    }
}

// Buscar por um estudante já existente
function searchStudentName ( studentName )
{
    let currentStudents = studentTbody.getElementsByTagName( "tr" );

    for ( let i = 0; i < currentStudents.length; i ++ )
    {
        let currentName = currentStudents[i].children[0].innerText;

        if ( studentName == currentName )
        {
            return currentStudents[i];
        }
    }
}

// Adicionar um novo estudante
function addStudent ()
{
    let studentRow = getStudentInput();
    let studentName = studentRow.children[0].innerText;
    let targetStudent = searchStudentName( studentName );

    if ( studentName && ! targetStudent )
    {
        studentTbody.appendChild( studentRow );
        clearStudentInput();
    }
}

// Remover um estudante existente
function removeStudent ()
{
    let studentRow = getStudentInput();
    let studentName = studentRow.children[0].innerText;
    let targetStudent = searchStudentName( studentName );

    if ( targetStudent )
    {
        targetStudent.remove();
        clearStudentInput();
    }
}

// Atualizar um estudante existente
function updateStudent ()
{
    let studentRow = getStudentInput();
    let studentName = studentRow.children[0].innerText;
    let targetStudent = searchStudentName( studentName );

    if ( targetStudent )
    {
        studentTbody.insertBefore( studentRow, targetStudent );
        targetStudent.remove();
        clearStudentInput();
    }
}

// Apagar todos os estudantes existentes
function resetStudent ()
{
    let currentStudents = studentTbody.getElementsByTagName( "tr" );
    let length = currentStudents.length

    for ( let i = 0; i < length; i ++ )
    {
        currentStudents[0].remove();
    }

    clearStudentInput();
}

const studentForm = document.getElementById( "student-form" );
const studentTbody = document.getElementById( "student-tbody" );

const addStudentButton = studentForm.querySelector( "#add-student-button" );
const removeStudentButton = studentForm.querySelector( "#remove-student-button" );
const updateStudentButton = studentForm.querySelector( "#update-student-button" );
const resetStudentButton = studentForm.querySelector( "#reset-student-button" );

addStudentButton.addEventListener( "click", addStudent );
removeStudentButton.addEventListener( "click", removeStudent );
updateStudentButton.addEventListener( "click", updateStudent );
resetStudentButton.addEventListener( "click", resetStudent );

