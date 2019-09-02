const truncate = (text, textLength, textSuffix = null) => (
  textSuffix
    ? text.slice(0, textLength - textSuffix.length) + textSuffix
    : text.slice(0, textLength)
)

console.log(truncate('DogCat', 3))
console.log(truncate('CatDogDuck', 9, 'Rat'))
console.log(truncate('The quick brown fox jumped over the lazy dog.', 15, '...'))
// truncate("CatDogDuck", 9, "Rat") ➞ "CatDogRat"
// truncate("DogCat", 3) ➞ "Dog"
// truncate("The quick brown fox jumped over the lazy dog.", 15, "...") ➞ "The quick br..."
