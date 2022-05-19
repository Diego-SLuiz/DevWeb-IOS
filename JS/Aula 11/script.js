document.title = "Javascript - Aula 11";

let articleTitle = document.createElement( "h2" );
articleTitle.innerText = "Subtítulo";

let articleText = document.createElement( "p" );
articleText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto, praesentium non perspiciatis mollitia tempora.";

let article = document.createElement( "article" );
article.appendChild( articleTitle );
article.appendChild( articleText );

let sectionTitle = document.createElement( "h1" );
sectionTitle.innerText = "Título Principal";

let sectionText = document.createElement( "p" );
sectionText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquid.";

let section = document.createElement( "section" );
section.appendChild( sectionTitle );
section.appendChild( sectionText );
section.appendChild( article );

const body = document.body;
body.appendChild( section );

window.alert( "Bem-vindo" );
