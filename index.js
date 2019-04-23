class SuperHero { //bapak
  constructor(couples, enemy, team, company) {
    this.couples = couples
    this.enemy = enemy
    this.team = team
    this.company = []
    this.superPower = new superPower
  }
  getCompany(company) {
    company.superHero = this.name
    this.company.push(company)
  }

}

class IronMan extends SuperHero { // anak
  constructor(couples, enemy, team) {
    super("pops", "Ivan Vanko", "Avenger")
  }

}

class SuperMan extends SuperHero {
  constructor(couples, enemy, team) {
    super('louis Lane', 'Lex Luthor', 'Justice League')
  }
}

class SpiderMan extends SuperHero {
  constructor(couples, enemy, team) {
    super('Gwen Stacy', 'Dr.Octopus', 'Avengers')
  }
}

class Aquaman extends SuperHero {
  constructor(couples, enemy, team) {
    super('Mera', 'Black Manta', 'Justice Laeague')
  }
}

class superPower {
  flyBoom() {
    this.superPower = `Can Fly, Strong, many have Missile and Laser`
  }
  superStrong() {
    this.superPower = `Very Strong,heat vision, can Fly `
  }
  spidey() {
    this.superPower = `Spider sense,Strong, HEaling Self`
  }
  water() {
    this.superPower = `Healing Self, Amazing fast, life in a water, `
  }
}

class Company {
  constructor(name) {
    this.name = name
    this.currentCompany = null
  }
}

let marvel = new Company('Marvel Cinematic Universe')
const dc = new Company('DC Comics')

const ironman = new IronMan()
const superman = new SuperMan()
const spiderman = new SpiderMan()
const aquaman = new Aquaman()

ironman.getCompany(marvel)
ironman.superPower.flyBoom()

superman.getCompany(dc)
superman.superPower.superStrong()

spiderman.getCompany(marvel)
spiderman.superPower.spidey()

aquaman.getCompany(dc)
aquaman.superPower.water()

console.log(ironman);
console.log(superman);
console.log(spiderman);
console.log(aquaman);