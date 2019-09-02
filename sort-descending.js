const sortDecending = num =>
  +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
