const frankenSplice = (arr1, arr2, n) => {
  const b = Array.from(arr2)
  b.splice(n, 0, ...arr1)

  return b
}

frankenSplice([1, 2, 3], [4, 5], 1)
