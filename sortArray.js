let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArray = numbers.concat(names);

mergedArray.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return b - a; 
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b); 
    } else {
        return 0;  
    }
});

console.log("Merged and sorted array:", mergedArray);


