// 2- TV

// class TV {
//     constructor(brand, channel = 1, volume = 50) {
//         this.brand = brand
//         this.channel = channel
//         this.volume = volume
//     }
//     volumeUp = (num) => {
//         this.volume += num
//         if (this.volume > 100) {
//             this.volume = 100
//         }
//     }

//     volumeDown = (num) => {
//         this.volume -= num
//         if (this.volume < 0) {
//             this.volume = 0
//         }
//     }

//     changeChannel = (num) => {

//         if (num < 50 && num >0) {
//          this.channel = num
//         }
//     }

//     reset() {
//         this.channel = 0
//         this.volume = 50
//         return `TV reseted. Ur ${this.brand} TV displays the ${this.channel}th channel, the volume is at ${this.volume}`
//     }

//     describe() {
//         return `Ur ${this.brand} TV displays the ${this.channel}th channel, the volume is at ${this.volume}`
//     }

// }

// const toshiba = new TV("toshiba")

// toshiba.volumeUp(10)

// console.log(toshiba.describe())

// toshiba.changeChannel(45)

// console.log(toshiba.describe())

// toshiba.changeChannel(-5)

// console.log(toshiba.describe())

// toshiba.volumeUp(110)

// console.log(toshiba.describe())

// toshiba.volumeDown(110)

// console.log(toshiba.describe())

// console.log(toshiba.reset())

// 3 - Video games - League of Legends

class Character {
    constructor (name, role, hp, mana, armor, mr, level = 1) {
        this.name = name
        this.role = role
        this.hp = hp
        this.mana = mana
        this.armor = armor
        this.mr= mr
        this.level = level
    }

    displayStats = () => {
        return `${this.name}(Lvl ${this.level}) Role: ${this.role}, HP: ${this.hp}, Mana: ${this.mana}, Armor:${this.armor}, MagicResistance:${this.mr}`
    }

    levelup = () => {
        if (this.level < 18) {
            this.level += 1
            this.hp *= 1.05
            this.mana *=1.10
        }
    }

    characterDeath = () => {
        if (this.hp <= 0)
        mana = 0
    }
}

const aatrox = new Character("Aatrox", "bruiser", 650, 0, 38, 32)

const bard = new Character("Bard", "support", 630, 350, 30, 25)

const drMundo = new Character("DrMundo", "tank", 680, 0, 45, 45)

const ezreal = new Character("ezreal", "marksman", 600, 375, 20, 25)

const cassiopea = new Character("cassiopea", "mage", 550, 350, 10, 10)

aatrox.levelup()

console.log (aatrox.displayStats())

