const birdCode = arr => {
  return arr.map(str => {
    let type = str.replace('-', ' ').toUpperCase().split(' ')
    let name = ''

    switch (type.length) {
      case 1:
        name = type[0].slice(0, 4)
        break
      case 2:
        name = type[0].slice(0, 2) + type[1].slice(0, 2)
        break
      case 3:
        name = type[0].slice(0, 1) + type[1].slice(0, 1) + type[2].slice(0, 2)
        break
      default:
        name = type[0].slice(0, 1) + type[1].slice(0, 1) + type[2].slice(0, 1) + type[3].slice(0, 1)
    }
    return name
  })
}

console.log(birdCode(['Fox Sparrow', 'White-Winged Crossbill', 'Veery', 'American Coot', 'Sora', 'Northern Rough-Winged Swallow', 'Purple Martin']))
