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
(()=>{
    const usuario ={
        nombre: "Carlos",
        edad:32,
        ciudad:"Valencia"
    }
    const {nombre,edad,ciudad}=usuario;
    console.log(`${nombre} "tiene" ${edad} "años y vive en " ${ciudad}`);


})()


