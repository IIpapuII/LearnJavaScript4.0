// 2.1 Tipo String Tipo de datos que representa una cadena de caracteres
String(4)
String(0.7)
// 2.1.1 Propiedades del objeto string Ejemplos

console.log(String(12354).length) //Devuelve al logitud de la cadena
console.log(String(79884).constructor) //Devuelve la función constructura nativa
console.log(String(838262).prototype) //Permite añadir nuevas propiedades y métodos al objeto

//2.1.2 Métodos que permiten hacer modificaciones a la propiedad del string

//Método charAt
console.log("hola".charAt(0));

//Métodos charCodeAt
console.log("hola".charCodeAt(0));

//Concat
console.log("hola".concat(" ","Mundo","Forma"));

//endsWith
console.log("hola mundo".endsWith("do"));

//indexOf
console.log("Hola mundo".indexOf("o", 0))

//split
console.log("Hola mundo".split(" "))

//toLowerCase
console.log("Hola Mundo".toLowerCase())

//Conver Number
console.log(Number(new Date()))