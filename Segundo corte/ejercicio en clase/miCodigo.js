/* //Formas de crear un objeto
//1
const carro1={

}
//2
const carro2 =new Object();
//3
const carro3 = Object.create();

//Poner dentro de una función un objeto */

function Carro (marca,modelo,color){
    this.marca=marca
    this.modelo=modelo;
    this.color=color;

}

const miCarro = new Carro('Renault','Sandero','Gris')
miCarro.marca
miCarro.modelo
miCarro.color
console.log("Mi carro es un: "+miCarro.marca+" "+miCarro.modelo+" "+miCarro.color)

let edad =36;
let miEdad=edad;
miEdad=37
console.log(edad)

const vehiculo={
    tipo:["Carro","Moto","Bote"],
    marca:{
        nombre:"BMW"
    }
}
console.log(vehiculo.tipo)
console.log(vehiculo.tipo[1])
console.log(vehiculo.marca)
console.log(vehiculo.tipo[0]+","+vehiculo.marca.nombre)

const car ={
    brand: "Susuki", 
    model: "Swift",
    start: function(){
        console.log(`Car Started ${this.brand} ${this.model}`);
    }
}
car.start();