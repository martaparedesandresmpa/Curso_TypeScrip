/*(() =>{

function saludar(nombre:string):void{
const mensaje="Hola" + nombre;
    console.log(mensaje)
}
    
saludar("Marta")

})()*/
export {};
/*(() =>{
function mostrarEdad(numero:number):void{
    if(numero>=18){
        console.log(" Eres mayor de edad ");
    }else{
        console.log(" Eres menor de edad ");
    }
    mostrarEdad(5);
    mostrarEdad(44);
}

})()*/
/*(() => {

function lanzarError(mensaje:string):never{
    throw new Error(mensaje);
}

})()*/
/*(() => {

function mostrarEmail(correo: string | null):void
if(correo===null){
    console.log("no hay email")
}else{
    console.log(" email : " + correo);
}
    mostrarEmail(null);
    mostrarEmail("Marta@gmail.com");


})()*/
/*(()=> {
function saludoPersonalizado(nombre :string | null):string{
    if(nombre===null){
        return "Hola invitado";
    }else{
        return "Hola " + nombre;
    }
    saludoPersonalizado(null);
    saludoPersonalizado("bombon");

}
})()*/
/*(()=> {
function saludoPersonalizado(nombre :string | undefined):string{
    if(nombre===undefined){
        return "Usuario no enviado";
    }else{
        return "Hola " + nombre;
    }
    saludoPersonalizado(undefined);
    saludoPersonalizado("bombon");

}
})()*/
/*function calcularPrecioFinal(precio:number, tieneDescuento:boolean): number{
    if(tieneDescuento===true){
        precio=precio*0.9;
        return precio;
    }else{
        return precio;
    }
calcularPrecioFinal(45,true);
calcularPrecioFinal(444,false);

}*/
/*(()=> {
function evaluarNotas(notas:number):string{
    if(notas>=5){
        return "Aprobado, tu nota es: " + notas;

    }else{
        return "suspenso, tu nota es : " + notas;
    }
    evaluarNotas(9);
    evaluarNotas(2);
}


})()*/
/*(()=> {
function notaFinal( notaExamen:number , notaTrabajo: number):string{
    const media= (notaExamen+notaTrabajo)/2;
    if(media>=5){
        return "Aprobado con nota media: " + media;
    }else{
        return "Has supendido con una nota media : " + media;
    }
    console.log (notaFinal(9,4));
    console.log(notaFinal(4,4));
    tsc

}
   



})()*/
/*(() => {
    function calcularIva(precio:number,conIva :boolean): number{
        
        if(conIva===true){
            return precio*1.21;

        }else{
            return precio;
        }
        calcularIva(4.2, true);
         calcularIva(8.2, false);

    }

})()*/
/*(() => {
    function aplicarDescuento (precio :number, tieneCupon:boolean):number{
        if(tieneCupon === true){
            return precio*0.8;
        }else{
            return precio;
        }
        console.log(55,true)
        console.log(155,false)
    }
    

})()*/
/*(() => {
    function avisarStock(stock:number):void{
        if(stock===0){
            console.log("sin stock");
        }else if(stock>0){
             console.log("hay stock: " + stock);
        }
        avisarStock(10);
        avisarStock(0);
    }
  

})()*/
/*(() =>{
    let nombre:string="Marta";
    let edad:number= 30 ;
    let tieneCarnet: boolean=true;
    let altura:number| undefined= undefined;
    let telefono: string| null = null;


    function mostrarDatos(nombre:string,edad:number):void{


         console.log("Hola soy "+ nombre + "y tengo "+ edad + " años")
    }
   
    mostrarDatos(nombre,edad)

})()*/
/*(() {
    let altura: number| undefined= undefined
    let telefono:string| null =null;
    function revisarDatos(altura:number|undefined,telefono:string|null):void{

        if(altura === undefined){
            console.log("No hay altura registrada");
        }else{
            
            console.log("altura: " + altura + "cm")
        }

        if(felefono===null){
            console.log("No hay telefonos")
        }else{
            console.log("telefono: " + telefono)
        }
        revisarDatos(altura,telefono);
        altura=100;
        felefono= "606890596";
        revisarDatos(altura,telefono);
    }
})()*/
/*(()=>{
    let nombre:string="Laura"
    let edad: number=15
    let email: string | null= null
    let estaActivo:boolean =true

    function verificarUsuario( nombre:string,edad: number,email: string | null ,estaActivo:boolean):void{
        if(!estaActivo){
            console.log("Usuario desactivado");
    
        }
        if(edad<18){
            console.log("Usuario menos de edad");

        }else{
            console.log("Usuario adulto");
        }
        if(email===null){
            console.log("No ties correo registrado");
        }else{
            console.log(email);
        }
        verificarUsuario(nombre,edad,email,estaActivo);

    }
})()*/
//# sourceMappingURL=Funciones.js.map