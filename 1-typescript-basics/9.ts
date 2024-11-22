// Írj egy függvényt, ami egy szám-tömböt kap paraméterül.
// A visszatérési értéke legyen egy tömb, amiben az eredeti tömb páros értékei vannak.

let tomb1: number[] = [3, 5, 6, 8, 9, 1]

function even(tomb: number[]): number[] {
    let returnArray: number[] = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            returnArray.push(tomb[i]);
        }
    }
    return returnArray;
}

console.log(even(tomb1));