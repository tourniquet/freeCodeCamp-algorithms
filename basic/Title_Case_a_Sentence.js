const titleCase = str => str.toLowerCase().split(' ').map(el => el.replace(el.substr(0, 1), el.substr(0, 1).toUpperCase())).join(' ')

titleCase(`I'm a little tea pot`)
