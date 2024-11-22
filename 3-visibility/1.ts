class Auto {
    speed: number = 0;
    getSpeed = () => {
        return this.speed;
    }
}

class Teherauto extends Auto implements PriceInterface {
    platos: boolean;
    uzemora: number;
    isPlatos = () => {
        return this.platos;
    }
    getPrice = () => {
        return this.uzemora + (this.platos ? 1000000 : 0);
    }
}

class Traktor extends Auto implements PriceInterface {
    eke: boolean;
    uzemora: number;
}

class Gokart extends Auto {
    lapos: boolean;
}

interface PriceInterface {
    getPrice: () => number;
}

let auto1 = new Auto();
let teherauto1 = new Teherauto();
