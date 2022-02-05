import GalacticAge from './../src/js/galactic-age.js';

const ga = new GalacticAge(35);

describe('GalacticAge', () => {
  const testBodies = [
    ['mercury', 0.24], ['venus', 0.62], ['earth', 1], ['mars', 1.88],
    ['jupiter', 11.86], ['saturn', 29.48], ['uranus', 84.07],
    ['neptune', 164.90]
  ];

  test('creates a earthAge property with a value that is passed in', () => {
    expect(ga.earthAge).toEqual(35);
  });
  test('turns any negative values passed in into positive ones', () => {
    const ga = new GalacticAge(-35);
    expect(ga.earthAge).toEqual(35);
  });
  test.each(testBodies)('create property "bodies" where bodies[%s] === %d',
    (planet, solarYear) => {
      expect(ga.bodies[planet]).toEqual(solarYear);
    }
  );
});

describe('GalacticAge.getAge()', () => {
  const testAgesByBody = [
    ['mercury', 145.83], ['venus', 56.45], ['earth', 35.00], ['mars', 18.62],
    ['jupiter', 2.95], ['saturn', 1.19], ['uranus', 0.42], ['neptune', 0.21],
    ['blorp', 0]
  ];

  test.each(testAgesByBody)('return val for .getAge("%s") should equal %d',
    (planet, solarYear) => {
      expect(ga.getAge(planet)).toEqual(solarYear);
    }
  );
});

describe('GalacticAge.getYearsLeft()', () => {
  const testYearsLeftByBody = [
    ['mercury', 191.67], ['venus', 74.19], ['earth', 46.00], ['mars', 24.47],
    ['jupiter', 3.88], ['saturn', 1.56], ['uranus', 0.55], ['neptune', 0.28],
    ['blorp', 0]
  ];

  const testYearsOverByBody = [
    ['mercury', 79.17], ['venus', 30.65], ['earth', 19.00], ['mars', 10.11],
    ['jupiter', 1.60], ['saturn', 0.64], ['uranus', 0.23], ['neptune', 0.12],
    ['blorp', 0]
  ];

  test.each(testYearsLeftByBody)('return val for .getYearsLeft("%s") should equal %d',
    (planet, solarYear) => {
      expect(ga.getYearsLeft(planet)).toEqual(solarYear);
    }
  );
  test.each(testYearsOverByBody)('ret pos val for .getYearsLeft("%s") if age is past life expectancy',
    (planet, solarYear) => {
      const ga = new GalacticAge(100);
      expect(ga.getYearsLeft(planet)).toEqual(solarYear);
    }
  );
});

describe('GalacticAge.getPlanets()', () => {
  const testBodyNames = [
    'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus',
    'neptune',
  ];

  test(`return val for .getPlanets() should equal ${testBodyNames}`, () => {
    expect(ga.getPlanets()).toEqual(testBodyNames);
  });
});