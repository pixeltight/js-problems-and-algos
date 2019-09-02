class Circle {
  constructor (radius) {
    this.radius = radius
  }

  getArea () {
    return Math.PI * Math.pow(this.radius, 2)
  }
  getPerimeter () {
    return 2 * this.radius * Math.PI
  }
}

let circy = new Circle(11)
console.log(circy.getArea())

let circa = new Circle(4.44)
console.log(circa.getPerimeter())
