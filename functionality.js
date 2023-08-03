let myLibrary = [];

function Book(tittle,description, pageNumbers, read) {
	this.tittle = tittle;
	this.description = description;
	this.pageNumbers = pageNumbers;
	this.read = read;
}








const addBookButton = document.querySelector('main > button');
addBookButton.addEventListener('click', openInterface);


const invisibleInterface = document.querySelector('#invisibleInterface');

function openInterface(){
invisibleInterface.style.display = 'flex';
}
const closeButton = document.querySelector('#invisibleInterface button[type="button"]');
closeButton.addEventListener('click', closeInterface)

function closeInterface(){
invisibleInterface.style.display = 'none';
}

const addToLibraryButton = document.querySelector('#invisibleInterface button:last-of-type');

addToLibraryButton.addEventListener('click', addBookToLibrary)


let tittle;
let description;
let pageNumbers;
let read;

function addBookToLibrary() {
  // do stuff here
	tittle = document.querySelector('#title');
	description = document.querySelector('#description');
	pageNumbers = document.querySelector('#pageNumbers');
	read = document.querySelector('#read');
	myLibrary.push(new Book(tittle.value, description.value,Number(pageNumbers.value), read.checked ));

updateMyLibrary();
}



const libraryOnHtml = document.querySelector('section');


function updateMyLibrary(){

libraryOnHtml.innerHTML = '';
for(let index = 0;index < myLibrary.length; index++){

	alert('this works');
let editButton = document.createElement('button');
libraryDiv = document.createElement('div');

editButton.innerText = `edit the '${myLibrary[index].tittle}' book`;
	

let tittle0 = document.createElement('p');
let tittle1 = document.createElement('p');

 tittle0.innerText = 'tittle:';
 tittle1.innerText = `${myLibrary[index].tittle}`;


let description0 = document.createElement('p');
let description1 = document.createElement('p');

 description0.innerText = 'description:';
 description1.innerText = `${myLibrary[index].description}`;


let pageNumbers0 = document.createElement('p');
let pageNumbers1 = document.createElement('p');

 pageNumbers0.innerText = 'Number of pages:';
 pageNumbers1.innerText = `${myLibrary[index].pageNumbers}`;

let read = document.createElement('p');
if(myLibrary[index].read){
read.innerText = 'this book has been read';
}
else{
read.innerText = `this book hasn't been read yet`;
}

libraryOnHtml.appendChild(libraryDiv);
libraryDiv.appendChild(editButton);
libraryDiv.appendChild(read);
libraryDiv.appendChild(tittle0);
libraryDiv.appendChild(tittle1);
libraryDiv.appendChild(description0);
libraryDiv.appendChild(description1);
libraryDiv.appendChild(pageNumbers0);
libraryDiv.appendChild(pageNumbers1);
}

}
