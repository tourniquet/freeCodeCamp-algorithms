const repeatStringNumTimes = (str, num) => num < 1 ? '' : Array(num).fill(str, 0).join('')

repeatStringNumTimes('abc', 3)
