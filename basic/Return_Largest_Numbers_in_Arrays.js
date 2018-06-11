const largestOfFour = arr => arr.map(el => el.sort((a, b) => a > b)).map(el => el.pop())

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
