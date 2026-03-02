define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const msg = "Hola Mundo";
    console.log(msg);
    let edades = [18, 15, 16, 5];
    edades[2] = 215;
    console.log(edades);
    console.log(edades[0]);
    console.log(edades[2]);
    edades.push(99);
    console.log(edades);
});
/*(()=>{

    type villanos ={
        nick: string;
        ironman: string;
        vision: string;
        actico: boolean;
        poder: number;

    }
    const vengadores:villanos ={
        nick: "Samule L Jackons",
        ironman: "Robert w",
        vision: "Paul Bettany",
        actico: true,
        poder:1500.256
        
    }
    const imprimirVengadores =({ironman}:villanos)=>{
      
     console.log(ironman);

    }
    //imprimirVengadores(vengadores);

    const avengersArr:[string ,boolean,number]= ["Capitan America", true, 150.25];
    const [,Hulk]=avengersArr
    console.log({Hulk})

})()*/
define("E6/Desestructuracion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*(()=>{
        const heroes =["Thor", "Hulk", "Ironman"];
        const primera=heroes[0];
        const segunda=heroes[0];
        const tercera=heroes[0];
        const [primero,segunda,tercera]=heroes;
        console.log(segunda);
    
    })()*/
    /*(()=>{
         const heroes:[string,string,string] =["Thor", "Hulk", "Ironman"];
         const[,Hulk]=heroes
         console.log(heroes)
    
    
    })()*/
    /*(()=>{
    
        const datos =["Laura" , 29 ,"Madrid", true];
        const [nombre,, ciudad,activo]=datos;
        console.log(`${nombre} vive en ${ciudad})
        (activo: ${activo})`);
    
    
    })()*/
    /*(()=>{
        const productos={
            nombre:"Zapatillas",
            precio:59.99,
            stock:12
        };
        const {nombre,precio,stock}=productos;
        console.log(`Producto: ${nombre}| Precio: ${precio}| Stock: ${stock}`)
    })()*/
    /*(()=>{
        const usuario ={
            nombre: "Carlos",
            edad:32,
            ciudad:"Valencia"
        }
        const {nombre,edad,ciudad}=usuario;
        console.log(`${nombre} "tiene" ${edad} "años y vive en " ${ciudad}`);
    
    
    })()*/
    /*(()=>{
        const equipos ={
            nombre: "Superheroes",
            miembros:["superman","thor","hulk"],
            activo:true
        };
        const {nombre,miembros,activo}=equipos;
        const [lider,segundo]=miembros
        console.log(`${nombre} - lider: ${lider}- segundo: ${segundo} - Activo: ${activo}`);
    
    
    })()*/
    /*(()=>{
     const coche ={
        marca:"Toyota",
        modelo:"Yaris",
        puertas:5,
     };
     const {marca,modelo}=coche;
     console.log(` Marca: ${marca} Modelo: ${modelo} `)
    
    })()*/
    (() => {
        const libro = {
            titulo: "El quijote",
            autor: "Cervantes",
            pagina: 863
        };
    })();
});
define("Funciones/Ejercicio2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
});
/*(() =>{

function saludar(nombre:string):void{
const mensaje="Hola" + nombre;
    console.log(mensaje)
}
    
saludar("Marta")

})()*/
define("Funciones/Funciones", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
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
define("Node-modulo-2/algo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Objetos/Ejercicio3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: 41,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    const vehiculo = {
        modelo: "f16",
        velocidad: 45455,
        militar: false,
        atacar: () => {
            console.log(vehiculo);
        },
    };
    const piloto = [{
            nombre: "Maverick",
            experiencia: 2,
            licenciaMilitar: true
        }];
    const mago = {
        nombre: "Gandalf",
        vida: 100,
        nivel: 2,
        luchar: () => {
            console.log("lancar hechizo");
        },
        subirNivel: () => {
            console.log("Aumenta el nivel +1");
        },
    };
    const guerrero = {
        nombre: "Aragor",
        vida: 100,
        nivel: 1,
        luchar: () => {
            console.log("Espadazo");
        },
    };
});
/*(()=>{
    let flash :{
        nombre:string,
        edad:number,poderes:string[],
        getNombres?:()=> String
    } = {
        nombre:"Barry Allen",
        edad:20,
        poderes:["supervelocidad,invisible,fuego"],

    };
    flash ={
        nombre: "Clark Kent",
        edad:30
        poderes:["volar","velocidad"],
        getNombres(){
            return this.nombre;

        }
    }
    console.log(flash.getNombres());
})();*/
/*(()=>{

    let animales :{
        nombre:string;
        tipoAnimal:String;
        edad:number;
        habilidades:string[];
        getnombres?:()=> String;
        
    } ={
    nombre:"Monito",
    tipoAnimal:"Mono",
    edad:1,
    habilidades:["Trepar","saltar"],
    getnombres(){
        return this.nombre;

    },
   
    }
    console.log(animales.getnombres);



})()*/
define("Objetos/Objetos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/*(()=> {
    let coche:{

        marca:string,
        modelo:string,
        año:number,
        extras:string[],
        getInfo?:()=> string
    } ={
        marca:"Toyota",
        modelo:"GT",
        año:2009,
        extras:["gps,camara trasera"],
    
    } ;
    coche={
        marca:"Opel",
        modelo:"GT r",
        año:20,
        extras:["camara trasera"],
        getInfo() {
            return this.marca  + " " + this.modelo + " "+ this.año;
        },

    };
    console.log(coche.getInfo)

    })()*/
define("Objetos/Type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            nombre: "Barry Allen",
            edad: 20,
            poderes: [1, 2]
        };
        let superman = {
            nombre: "Clark Kent",
            edad: 30,
            poderes: [1],
            getNombres() {
                return this.nombre;
            },
        };
    })();
});
/*(() =>{
   type Hero={
       nombre:string;
       edad?:number;
       poderes:number[];
       getNombres?:()=>string;
   }
   let myCustomVariable: (string | number | Hero) = "Fernando";
   console.log(typeof myCustomVariable)
   myCustomVariable=20
   console.log(typeof myCustomVariable)

   myCustomVariable ={
       nombre: "Bruce",
       edad: 43,
       poderes:[1],
   }
   console.log(typeof myCustomVariable);
})();*/
define("Objetos/Union-typs", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Tipos/Ejercicios1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // Tipos
        const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false;
        // Tuplas
        const parejaHeroes = [batman, superman];
        const villano = ['Lex Lutor', 5, true];
        // Arreglos
        const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        //Enumeraciones
        let fuerza;
        (function (fuerza) {
            fuerza[fuerza["acuaman"] = 0] = "acuaman";
            fuerza[fuerza["batman"] = 1] = "batman";
            fuerza[fuerza["flash"] = 5] = "flash";
            fuerza[fuerza["superman"] = 100] = "superman";
        })(fuerza || (fuerza = {}));
        const fuerzaFlash = fuerza.flash;
        const fuerzaSuperman = fuerza.superman;
        const fuerzaBatman = fuerza.batman;
        const fuerzaAcuaman = fuerza.acuaman;
        // Retorno de funciones
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        // Aserciones de Tipo
        const poder = '100';
        const largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
});
