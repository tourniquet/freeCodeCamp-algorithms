const factorialize = num => num === 0 ? 1 : num * factorialize(num - 1)

factorialize(5)
