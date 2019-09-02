// function Book (title, author) {
//   this.title = title
//   this.author = author

//   this.getTitle = function () {
//     return 'Title: ' + this.title
//   }

//   this.getAuthor = function () {
//     return 'Author: ' + this.author
//   }
// }

// const WP = new Book('War and Peace', 'Leo Tolstoy')

class Book {
  constructor (title, author) {
    this.title = title
    this.author = author
  }

  getTitle () {
    return `Title: ${this.title}`
  }

  getAuthor () {
    return `Author: ${this.author}`
  }
}

const PP = new Book('Pride and Prejudice', 'Jane Austen')
const H = new Book('Hamlet', 'William Shakespeare')
const WP = new Book('War and Peace', 'Leo Tolstoy')

console.log(WP.title)
console.log(WP.author)
console.log(WP.getTitle())
console.log(WP.getAuthor())
