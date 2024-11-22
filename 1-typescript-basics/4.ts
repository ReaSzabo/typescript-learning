// interfaces

interface Car {
    type: string,
    weight: number,
    color: string,
    isNice: boolean
}

var szabiCar: Car = {
    type: "Insignia",
    weight: 1100,
    color: "black",
    isNice: true
}

var andikaCar: Car;

andikaCar = {
    type: "Fiat 500 Cabrio",
    weight: 1000,
    color: "green",
    isNice: false
}



function logColorOfCar(car: Car) {
    console.log(car.color);
}

logColorOfCar(szabiCar);
logColorOfCar(andikaCar);
