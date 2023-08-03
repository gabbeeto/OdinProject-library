const rootElement = document.querySelector(':root');

let HTMLElement = document.querySelector('html');
const darkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches;

if(darkModeEnabled){
HTMLElement.classList.toggle('dark');
}
