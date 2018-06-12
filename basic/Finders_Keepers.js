const findElement = (arr, func) => arr.filter(el => func(el)).shift()

findElement([1, 2, 3, 4], num => num % 2 === 0)
