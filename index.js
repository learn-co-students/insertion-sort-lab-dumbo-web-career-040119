function findMinAndRemove(array){
let min = array[0],
minN = 0;
for (let i = 0; array.length > i ; i++)
if (array[i] < min) {
  min = array[i]
  minN = i
}
array.splice(minN, 1)
return min
}

function insertionSort(array){
  let min,
  sorted = []
  while(array.length !== 0) {
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}
