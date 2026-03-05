(()=> {
    class heroe{
        nombre;
        poder;
        constructor(nombre="sin nombre",poder=0){
            this.nombre= nombre;
            this.poder=poder;
        }
    
        
    }   
    class heroesVoladores extends heroe{ 
        voladores;

        constructor(nombre,poder){
            super(nombre,power)
            this.voladores=true;

        }

    }
    const hulk =new heroe("hulk",9001);
    const falcon=new heroesVoladores("falco",500)
    console.log(hulk)
    console.log(falcon)

})()