alert( "Checar console!!!" );

class Person
{
    constructor ( name, birthday )
    {
        this.name = name;
        this.birthday = birthday;
    }

    get age ()
    {
        let age = currentDate.getFullYear() - this.birthday.getFullYear();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth();
        let birthDay = this.birthday.getDate();
        let birthMonth = this.birthday.getMonth();

        if ( currentMonth < birthMonth || ( currentMonth == birthMonth && currentDay < birthDay ) )
        {
            return age -= 1;
        }

        return age;
    }

    get hasCompleteBirthday ()
    {
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth();
        let birthDay = this.birthday.getDate();
        let birthMonth = this.birthday.getMonth();

        if ( currentMonth < birthMonth || ( currentMonth == birthMonth && currentDay < birthDay ) )
        {
            return false;
        }

        return true;
    }
}

const currentDate = new Date();

const persons = new Array( 10 );
persons[0] = new Person( "Diego", new Date( 2003, 4, 31) );
persons[1] = new Person( "Davi", new Date( 2001, 11, 18) );
persons[2] = new Person( "Daniel", new Date( 2005, 3, 17) );
persons[3] = new Person( "Diogo", new Date( 2003, 6, 25) );
persons[4] = new Person( "Danilo", new Date( 2008, 7, 1) );
persons[5] = new Person( "David", new Date( 1998, 9, 27) );
persons[6] = new Person( "Douglas", new Date( 1997, 1, 29) );
persons[7] = new Person( "Derik", new Date( 1999, 2, 13) );
persons[8] = new Person( "Domingos", new Date( 2000, 21, 31) );
persons[9] = new Person( "Denis", new Date( 2002, 8, 20) );

for ( let i = 0; i < persons.length; i ++ )
{
    let person = persons[i];
    console.log( `Nome: ${person.name} Idade: ${person.age} Fez aniversário: ${person.hasCompleteBirthday}` );
}
