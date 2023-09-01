
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newArr = []
  const result = []
  if (matrix === undefined) {
    return []
  }
matrix.forEach(element => {
   if (matrix.indexOf(element) % 2 !== 0) {
      newArr.push(element.reverse())
    } else {
      return newArr.push(element)
    }
  })
newArr.forEach(element => {
  element.forEach(el => {
    result.push(el)
  })
})
return result;
}
