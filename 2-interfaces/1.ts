// if your object was made from a class
// use class type


class Bike {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    logSpeed() {
        console.log(this.speed);
    }
}

let bike = new Bike(10);
bike.logSpeed()

function getBikeSpeed(bike: Bike) {
    return bike.speed;
}


