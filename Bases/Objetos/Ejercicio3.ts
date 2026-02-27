type Coche = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros:number
  disparar?:()=>void,
}


// Objetos
const batimovil :Coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano={
  nombre:string;
  edad: number;
  mutante:boolean;

}
const villanos:villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 41,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charles ={
  poder:string,
  estatura: number

}
const charles :charles = {
  poder:"psiquico",
  estatura: 1.78
};
type apocalipsis={
  lider:boolean,
  miembros:string[]

}

const apocalipsis: apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:(charles|apocalipsis);

mystique = charles;
mystique = apocalipsis;


type avion={
  modelo:string;
  velocidad:number;
  militar:boolean;
  atacar ?():void;

}
const vehiculo:avion ={
  modelo: "f16",
  velocidad:45455,
  militar:false,
  atacar :()=>{
    console.log(vehiculo)

  },
};

type Piloto={
  nombre:string,
  experiencia:number,
  licenciaMilitar:boolean
}
const piloto :Piloto[]=[{
  nombre:"Maverick",
  experiencia:2,
  licenciaMilitar:true

}]

type Personaje={
  nombre:string,
  vida:number,
  nivel:number,
  luchar?():void;
  subirNivel?():void;
}
const mago: Personaje={
  nombre:"Gandalf",
  vida:100,
  nivel:2,
  luchar:()=>{
    console.log("lancar hechizo")

  },
  subirNivel:()=>{
    console.log("Aumenta el nivel +1")

  },
}
const guerrero: Personaje={
  nombre:"Aragor",
  vida:100,
  nivel:1,
  luchar:()=>{
    console.log("Espadazo")
  },
};
  
  



