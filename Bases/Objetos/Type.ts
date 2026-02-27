(()=>{

    type Hero={
        nombre:string;
        edad?:number;
        poderes:number[];
        getNombres?:()=>string;

    }
   
    let flash : Hero ={
        nombre:"Barry Allen",
        edad:20,
        poderes:[1,2]
    };
    
    let superman : Hero ={
        nombre: "Clark Kent",
        edad:30,
        poderes:[1],
        getNombres() {
            return this.nombre;
            
        },

        };
    })();
   