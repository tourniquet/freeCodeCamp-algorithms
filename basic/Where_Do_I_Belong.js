const getIndexToIns = (arr, num) => {
  if (!arr.length) return 0

  const temp = arr.sort((a, b) => a > b).findIndex(el => el > num || el === num)

  return temp > -1 ? temp : arr.length
}

getIndexToIns([10, 20, 30, 40, 50], 35)
