// el decorador nos permite añadir funcionalidad a una clase
function contratar(target: Function): Function {
    return class extends target {
        contratar = ():void => {
            console.log("contratando")
            this._contratado = true
        }
    }
}

@contratar
class Persona {
    public edad: number
    public nombre: string
    private _contratado: boolean

    constructor(nombre: string, edad: number) {
        this.edad=edad
        this.nombre = nombre
        this._contratado = false
    }

    //set contratado(p: boolean): void {
      //  this._contratado = p
    //}

    get contratado(): string {
        return this._contratado
    }

    //public contratar(p: string): void {
    //    this._profesion =  p
    //}
   
}

const pepe = new Persona("pepe", 67)
console.log(pepe)
pepe.contratar()
console.log(pepe)
console.log(pepe.contratado)