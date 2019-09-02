// https://edabit.com/challenge/YYr4WQPJuCCiN6wLT
class Pagination {
  constructor (items, pageSize) {
    this.items = items || []
    this.pageSize = Math.floor(pageSize) || 10
    this.totalPages =
      this.items.length <= 1
        ? 1
        : Math.ceil(this.items.length / this.pageSize) || 0
    this.currentPage = 1
  }

  prevPage () {
    if (this.currentPage > 1) {
      this.currentPage -= 1
    }
    return this
  }

  nextPage () {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1
    }
    return this
  }

  firstPage () {
    this.currentPage = 1
    return this
  }

  lastPage () {
    this.currentPage = this.totalPages
    return this
  }

  goToPage (page) {
    if (page >= this.totalPages) {
      this.currentPage = this.totalPages
    } else if (page <= 1) {
      this.currentPage = 1
    } else {
      this.currentPage = Math.floor(page)
    }
    return this
  }

  getVisibleItems () {
    let begin = (this.currentPage - 1) * this.pageSize
    let end = begin + this.pageSize
    let pageList = this.items.slice(begin, end)
    return pageList
  }
}

const p1 = new Pagination(new Array(69), 5)
console.log(p1.nextPage().currentPage)
console.log(p1.lastPage().currentPage)
console.log(p1.nextPage().currentPage) // 14
console.log(p1.prevPage().currentPage)
console.log(p1.firstPage().currentPage)
console.log(p1.prevPage().currentPage)
console.log(p1.goToPage(99).currentPage)
console.log(p1.goToPage(4).currentPage)
console.log(p1.goToPage(6.5).currentPage)
console.log(p1.goToPage(-99).currentPage)
console.log(p1)

// const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const p = new Pagination(alphabetArray, 4)

// getVisibleItems () {
//   let chunked = []
//   let index = this.currentPage - 1

//   while (index <= this.items.length) {
//     chunked.push(this.items.slice(index, index + this.pageSize))
//     index += this.pageSize
//   }
//   return chunked[0]
// }
