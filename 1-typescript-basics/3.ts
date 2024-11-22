// functions
// where can we put types in a function declaration?

function double(num: number): number {
    return num + num;
}

double(11);
//double("valami");

var myDoubleNumber = double(11);
console.log(myDoubleNumber);

var myOtherNumber;
myOtherNumber = double(2);
console.log(myOtherNumber);

var biztosHogySzam: number;
biztosHogySzam = double(4);

var andikaneve: string;
//andikaneve = double(3);