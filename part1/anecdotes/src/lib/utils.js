export function returnHighestValueIndex(numArray) {
    return numArray.indexOf(
    Math.max(...numArray)
  )
}

export function returnRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}