let mode = document.querySelector('#mode');

mode.onclick = () =>{
if(mode.classList.contains('bx-moon')){
mode.classList.replace('bx-moon' , 'bx-sun');
document.body.classList.add('color');

}else{
mode.classList.replace('bx-sun' , 'bx-moon');
document.body.classList.remove('color');
}
}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = function (){
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');
}