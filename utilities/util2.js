// add numbers in an array
const sum = (arr) => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total
  }
  
  // concatenate two arrays
  const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
  

module.exports = {
    concat,
    sum,
  }