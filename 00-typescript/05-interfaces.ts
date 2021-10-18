interface VozAnimal {
    hablar(): string
}

class Perro implements VozAnimal {
    hablar(): string {
        return "Guau Guau"
    }
}

class Gato implements VozAnimal {
    hablar(): string {
        return "Miau Miau"
    }
}


let mastoca: VozAnimal

 //mastoca = new Perro()
 mastoca = new Gato()

 console.log(mastoca.hablar())