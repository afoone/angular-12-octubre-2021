// String
let c: string
c = "hola mundo"

let d = "infiero el tipo" // como se inicializa a un string, se queda en estrig
console.log(c, d)

// number
let numero: number = 0

// boolean
let b: boolean = true

// cualquier tipo
let cualquiera: any = ["hola"]

// arrays
let arr: Array<string> = []
arr.push("hola")
console.log(arr)

// arrays de any
let arr_any : Array<any> = []

// otra forma de definir arrays
let years : number[] 

// pueda ser multiple tipo de datos (alfanumerico)
let multiple : string | number = 4;
multiple = "hola"
//multiple = false
