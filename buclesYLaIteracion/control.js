var chars = new Array();

for (var i = 0; i < 10; i++) {
    chars[i] = {code: i, char: String.fromCharCode(i)};
}
console.log(chars);

function calculadora(){
     this.suma = 0;
     this.producto = 1;
}

calculadora.prototype.sumar = function(array){
    array.forEach(function(valor){
        this.suma += valor;
    }, this);
}
calculadora.prototype.multiplicar = function(array){
    array.forEach(function(valor){
        this.producto *= valor
    }, this);
}

var array = [1, 2, 3, 4, 5];
var calc = new calculadora();
calc.sumar(array);
calc.multiplicar(array);
console.log(calc.suma);
console.log(calc.producto);