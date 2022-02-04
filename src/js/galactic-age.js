export default class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.maxAge = 81;
    this.bodies = {
      'mercury': 0.24,
      'venus': 0.62,
      'earth': 1,
      'mars': 1.88,
      'jupiter': 11.86,
      'saturn': 29.48,
      'uranus': 84.07,
      'neptune': 164.90
    };
  }

  getAge(planet) {
    if (this.bodies[planet]) {
      return Number((this.earthAge / this.bodies[planet]).toFixed(2));
    } else {
      return 0;
    }
  }

  getYearsLeft(planet) {
    if (this.bodies[planet]) {
      let maxAgeOnBody = this.maxAge / this.bodies[planet];
      let currentAgeOnBody = this.earthAge / this.bodies[planet];
      return Number((maxAgeOnBody - currentAgeOnBody).toFixed(2));
    } else {
      return 0;
    }
  }
}
