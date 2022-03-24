const boton = document.getElementsByClassName('boton');
const divs = document.getElementsByClassName('divs');
const imagen = getElementsByClassName('imagen')[0];

//Asigna a los botones la función cambiar fondo cuando hago click
for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarImg);
}

function dameImg(){

        //Se genera un número entre 0 y 14 aleatorio y se redondea para que quede entero.
        const indice = Math.floor(Math.random()*20); 
        const imgn = `Imagenes/idol ${indice}.JFIF`
}
function cambiarImg(button){  
    const contenedor = this.parentNode;
    contenedor.style.backgroundColor = imgn;
    console.log(contenedor.firstChild);
    ponerTexto(contenedor, imgn);
}