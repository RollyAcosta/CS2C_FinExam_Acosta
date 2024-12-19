let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

let restructuredArray = [
  [ 'Genevieve', 24 ],
  [ 'Juan', 65 ],
  [ 'Luna', 21 ],
  [ 'Gabriel', 5 ],
  [ 'Elise', 9 ]
]


for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

console.log(restructuredArray);
