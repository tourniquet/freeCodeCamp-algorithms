const mutation = arr => {
  const string = arr[0].toLowerCase()
  const temp = arr[1].split('').map(el => el.toLowerCase())

  for (let i = temp.length; i >= 0; i--) {
    if (string.indexOf(temp[i]) > -1) temp.splice(i, 1)
  }

  return !Boolean(temp.length)
}

mutation(['hello', 'hey'])
