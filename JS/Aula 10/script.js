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

        if ( currentDate.getMonth() <= this.birthday.getMonth() && currentDate.getDate() < this.birthday.getDate() )
        {
            return age -= 1;
        }

        return age;
    }

    get niver ()
    {
        if ( currentDate.getMonth() <= this.birthday.getMonth() && currentDate.getDate() < this.birthday.getDate() )
        {
            return false;
        }

        return true;
    }
}

const currentDate = new Date()
const person = new Person( "Diego", new Date( 2003, 4, 31 ) )
console.log( person )
