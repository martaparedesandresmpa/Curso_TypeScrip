(()=>{
    type heroes={
        name:string,
        arma:string;
    }
    const ironman:heroes={
        name:"Ironman",
        arma:"espada"
    }
    const capAmerica:heroes={
        name:"capAmerica",
        arma:"escudo"
    }
    const Thor:heroes={
        name:"Thor",
        arma:"martillo"
    }
    const superheroes=[ironman,capAmerica,Thor];
    for (const heroes of superheroes) {
        console.log(heroes)
        
    }

})()