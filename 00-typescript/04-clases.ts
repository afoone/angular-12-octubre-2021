class Persona {
    public edad: number
    public nombre: string
    private _profesion: string

    constructor(nombre: string, edad: number) {
        this.edad=edad
        this.nombre = nombre
        this._profesion = ""
    }

    public setProfesion(p: string): void {
        this._profesion = p
    }

    public getProfesion(): string {
        return this._profesion
    }
   
}

const pepe = new Persona("pepe", 56)
pepe.setProfesion("fontanería")
console.log(pepe)