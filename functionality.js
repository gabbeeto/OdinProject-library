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


let tittle;
let description;
let pageNumbers;
let read;


function openInterface(){
invisibleInterface.style.display = 'flex';
}
const closeButton = document.querySelector('#invisibleInterface button[type="button"]');
closeButton.addEventListener('click', closeInterface)

function closeInterface(){
invisibleInterface.style.display = 'none';

tittle.value = '';
description.value = '';
pageNumbers.value = '';
read.checked = false;
}

const addToLibraryButton = document.querySelector('#invisibleInterface button:last-of-type');

addToLibraryButton.addEventListener('click', addBookToLibrary)



function addBookToLibrary() {
  // do stuff here

	tittle = document.querySelector('#title');
	description = document.querySelector('#description');
	pageNumbers = document.querySelector('#pageNumbers');
	read = document.querySelector('#read');

if(pageNumbers.validity.patternMismatch){
alert('you have to type a number in number of pages yoo!')
}
else{

	myLibrary.push(new Book(tittle.value, description.value,Number(pageNumbers.value), read.checked ));

updateMyLibrary();
closeInterface();

}
}



const libraryOnHtml = document.querySelector('section');


function updateMyLibrary(){

libraryOnHtml.innerHTML = '';
for(let index = 0;index < myLibrary.length; index++){

let editButton = document.createElement('button');
libraryDiv = document.createElement('div');

editButton.innerText = `edit the '${myLibrary[index].tittle}' book`;
editButton.id = `i${index}`
editButton.addEventListener('click', createEditInterface)

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


const editPopUpContainerForInputs = document.querySelector('section:nth-of-type(2) > div:nth-of-type(2)');
function createEditInterface(event){
document.querySelector('section:nth-of-type(2)').style.display = 'flex';

for(let index = 0; index < myLibrary.length;index++){
if(event.target.id.substring(1, event.target.id.length) == index){
console.log(`${index}`);
const tittleParagraph = document.createElement('p')
tittleParagraph.innerText = 'tittle';


createElementForEditPopUp('tittle', index);
createElementForEditPopUp('description', index);
createElementForEditPopUp('pageNumbers', index, 'Number of pages');
}

}
}

function createElementForEditPopUp(name, index, customParagraph = name){

const createParagraph = document.createElement('p')
createParagraph.innerText = `${customParagraph}:`;


const createInput = document.createElement('input')
createInput.value = `${myLibrary[index][name]}`;

editPopUpContainerForInputs.appendChild(createParagraph);
editPopUpContainerForInputs.appendChild(createInput);
}
