class SuperHero { //bapak
  constructor(loveCouples, enemys, team, corporates) {
    this.loveCouples = loveCouples
    this.enemys = enemys
    this.team = team
    this.corporates = []
    this.superPower = new superPower
  }
  getCorporates(corporates) {
    corporates.superHero = this.name
    this.corporates.push(corporates)
  }

}

class IronMan extends SuperHero { // anak
  constructor(loveCouples, enemys, team) {
    super("pops", "Ivan Vanko", "Avenger")
  }

}

class SuperMan extends SuperHero {
  constructor(loveCouples, enemys, team) {
    super('louis Lane', 'Lex Luthor', 'Justice League')
  }
}

class SpiderMan extends SuperHero {
  constructor(loveCouples, enemys, team) {
    super('Gwen Stacy', 'Dr.Octopus', 'Avengers')
  }
}

class Aquaman extends SuperHero {
  constructor(loveCouples, enemys, team) {
    super('Mera', 'Black Manta', 'Justice Laeague')
  }
}

class superPower {
  constructor() {}
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

class Corporates {
  constructor(name) {
    this.name = name
    this.currentCorporates = null
  }
}

let marvel = new Corporates('Marvel Cinematic Universe')
const dc = new Corporates('DC Comics')

const ironman = new IronMan()
const superman = new SuperMan()
const spiderman = new SpiderMan()
const aquaman = new Aquaman()

ironman.getCorporates(marvel)
ironman.superPower.flyBoom()

superman.getCorporates(dc)
superman.superPower.superStrong()

spiderman.getCorporates(marvel)
spiderman.superPower.spidey()

aquaman.getCorporates(dc)
aquaman.superPower.water()

console.log(ironman);
console.log(superman);
console.log(spiderman);
console.log(aquaman);