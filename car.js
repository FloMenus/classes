class Car  {
    constructor (brand, speed) {
        this.brand= brand;
        this.speed= speed;
    }

    accelerate = num => {
        this.speed += num
        return this.speed
    }

    brake = num => {
        this.speed -= num
        return num
    }

    describe = () => {
        return `${this.brand} running at ${this.speed}`

    }
}

let ford = new Car ("ford", 0)

console.log (ford)
console.log (ford.describe())
console.log (ford.accelerate(50))
console.log (ford.describe())
console.log (ford.brake (25))
console.log (ford.describe())

let lexus = new Car ("lexus",0)
console.log (lexus)
console.log (lexus.describe())
console.log (lexus.accelerate(70))
console.log (lexus.describe())
console.log (lexus.brake (15))
console.log (lexus.describe())


