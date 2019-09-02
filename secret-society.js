const societyName = friends =>
  friends
    .map(name => name[0])
    .sort()
    .join('')

console.log(societyName(['Adam', 'Sarah', 'Malcolm']))
