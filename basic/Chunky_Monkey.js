const chunkArrayInGroups = (arr, size) => {
  const some = []

  while (arr.length) {
    some.push(Array.from(arr.splice(0, size)))
  }

  return some
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
