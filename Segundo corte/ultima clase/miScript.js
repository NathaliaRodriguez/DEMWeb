//Las clases se representan con una letra en mayuscula

class Persona {
    nombre
}

const cesar = new Persona();
cesar.nombre="César";

console.log(cesar.nombre);

class Persona1 {
    saludo(){
        console.log("Hola Jackson")
    }
}

const kathe = new Persona1();
kathe.saludo();

class Persona2{
    constructor(nombre,edad,estatura){
        this.nombre=nombre
        this.edad=edad
        this.estatura=estatura
    }

    saludo(){
        console.log(`Hola Jackson, soy ${this.nombre}, tengo ${this.edad} años y mido ${this.estatura}cm`)

    }
}

const people = new Persona2 ("Nathalia","23","1.56")
people.saludo();

class Mascota extends Persona2{
    constructor(nombre1,especie,raza){
        this.nombre1=nombre1
        this.especie=especie
        this.raza=raza
    }

}