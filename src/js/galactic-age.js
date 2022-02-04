export default class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
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
}