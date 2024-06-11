//Declación de varaibles con palabras reservadas

var fechaActualVar = new Date()
let fechaActual = new Date()
const fechaActualConst = new Date()

// 1.2 Ambito de las variables

var total = 0;

function suma(a, b){
    var aux = a + b;
    total = aux;
}

function resta(a, b){
    var aux = a - b;
    total = aux;
}