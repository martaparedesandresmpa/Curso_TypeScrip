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
export {};
//# sourceMappingURL=Ejercicio3.js.map