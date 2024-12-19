let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log(`Swapped ${arr[i]} and ${arr[i+1]}. Array:`, arr);
      }
    }
  } while (swapped);
}

console.log("Unsorted array:", numbers);
bubbleSort(numbers);
console.log("Sorted array:", numbers);

