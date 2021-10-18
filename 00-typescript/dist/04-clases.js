var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
        this._profesion = "";
    }
    Persona.prototype.setProfesion = function (p) {
        this._profesion = p;
    };
    Persona.prototype.getProfesion = function () {
        return this._profesion;
    };
    return Persona;
}());
var pepe = new Persona("pepe", 56);
pepe.setProfesion("fontanería");
console.log(pepe);
