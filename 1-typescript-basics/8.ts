// Írj egy függvényt, ami 1 autó objektumot kap paraméterül és kiírja a console-ra,
// hogy az autó új-e (isNew).

interface Kocsika {
    brand: string;
    type: string;
    price: number;
    isNew: boolean;
}

let kocsi1: Kocsika = {
    brand: "Ford",
    type: "Fiesta",
    price: 1000000,
    isNew: false
}

let kocsi2: Kocsika = {
    brand: "Honda",
    type: "Jazz",
    price: 5400000,
    isNew: true
}

function uje(kocsika: Kocsika): void {
    console.log(kocsi1.isNew)
}