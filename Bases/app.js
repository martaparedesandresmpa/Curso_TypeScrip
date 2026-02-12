var msg = "Hola Mundo";
console.log(msg);
var edades = [18, 15, 16, 5];
edades[2] = 215;
console.log(edades);
console.log(edades[0]);
console.log(edades[2]);
edades.push(99);
console.log(edades);
(function () {
    function saludar(nombre) {
        var mensaje = "Hola";
        console.log(mensaje + nombre);
    }
    saludar("Marta");
})();
