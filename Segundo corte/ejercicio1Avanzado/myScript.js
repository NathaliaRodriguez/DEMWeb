const boton = document.getElementsByClassName('boton');
const divs = document.getElementsByClassName('divs');
const valHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//Asigna a los botones la función cambiar fondo cuando hago click
for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarFondo);
    
}

//Cuando se inicia se asigna un color aleatorio a los divs
for (let i = 0; i < divs.length; i++) {
    const element = divs[i];
    let hexa = dameHexa();
    console.log(hexa);
    element.style.backgroundColor = hexa;
    ponerTexto(element, hexa);
}

//Esta función devuelve un código hexadecimal aleatorio
function dameHexa(){
    let hexa = '#';

    for(let i = 0; i < 6; i++){
        //Se genera un número entre 0 y 14 aleatorio y se redondea para que quede entero.
        const indice = Math.floor(Math.random()*valHex.length); 
        hexa += valHex[indice];
    }
    return hexa;
}

//Esta función cambia el fondo del div cuando se hace click en el botón
function cambiarFondo(button){ 
    let hexa = dameHexa();   
    const contenedor = this.parentNode;
    contenedor.style.backgroundColor = hexa;
    console.log(contenedor.firstChild);
    ponerTexto(contenedor, hexa);
}

//Esta función coloca el código HEX como texto
function ponerTexto(element, hexa) {
    element.firstElementChild.innerHTML = "HEX: " + hexa;
} 