// if you have a normal object
// use interface type

let andiBicicle = {
    speed: 10
}

interface Bicycle {
    speed: string;
}


function getBicicleSpeed(andiBicicle: Bicycle) {
    return andiBicicle.speed;
}
