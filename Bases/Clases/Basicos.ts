/*(()=>{
    class animal{
        nombre:string;
        edad:number;

         constructor(nombre:string,edad:number){

            this.nombre=nombre;
            this.edad=edad


         }
         hablar(){
            console.log("Soy un animal");
         }

         
    }
    const perro= new animal("Toby",3)
    


})()*/
/*(()=>{
    class Persona{
         nombre:String;
        edad:Number;

        constructor (nombre:String,edad:Number){
        this.nombre=nombre;
        this.edad=edad;


    }
    saludar(){
        console.log("Hola, soy una persona")
    }
   
    }
    const persona1=new Persona("Carlos", 55);
    persona1.saludar();


})()*/

/*(()=>{
    class coche{
        marca:string;
        velocidad:number;
        constructor(marca:string,velocidad:number){
            this.marca=marca;
            this.velocidad=velocidad;
           
        }
         acelerar(){
            console.log("El coche esta acelerando")
    }
   
        
    }
    const car=new coche("Opel",100);
    car.acelerar()

})()*/
/*(()=>{
    class listaNotas{
        notas:number[];
        constructor(notas:number[]){
            this.notas=notas;
        }
        contarAprobados(){
            let aprobados=0;
            for(let i=0;i<this.notas.length;i++){
                if(this.notas[i]!>=5){ 
                    aprobados++;

                }
               

            }
            console.log("Aprobados:", aprobados)

        }


    }
    const lista=new listaNotas([2,3,5,7,8]);
    lista.contarAprobados();

})()*/
/*(()=>{
    class listaNotas{
        notas:number[];
        constructor(notas:number[]){
            this.notas=notas;
        }
        contarAprobados(){
            let aprobados=0;
            let media=0;
            for(let i=0; i<this.notas.length;i++){
                if(this.notas[i]!>=5){ 
                    aprobados++;
            }
            
        }
        media=aprobados/this.notas.length;
       console.log("Aprobados:" , aprobados);
       console.log("Media:", media)


    }
    const lista=new listaNotas([2,5,4,8,9,7,4]);
    lista.contarAprobados();

})()*/
(()=>{
    class numerosPares{
        numeros:number[]
        constructor(numeros:number[]){
        this.numeros=numeros;


    }
    contarAprobados(){
        let aprobados=0;
        let pares=0;
        for(let i=0; i<this.numeros.length;i++){
            if(this.numeros[i]%2===0){
                pares++;
            }else if(this.numeros[i]!>=5){ 
                aprobados++;
            }
         }
         console.log("Aprobados:",aprobados)
         console.log("Numeros pares:" , pares)
        }

        const lista=new numerosPares([3,4,6,8,6,4,3,8]){
        lista.contarAprobados() ;

        }
    





})()
