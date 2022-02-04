import GalacticAge from './../src/js/galactic-age.js';

describe('GalacticAge', () => {
  const testBodies = [
    ['mercury', 0.24,],
    ['venus', 0.62,],
    ['earth', 1,],
    ['mars', 1.88,],
    ['jupiter', 11.86,],
    ['saturn', 29.48,],
    ['uranus', 84.07,],
    ['neptune', 164.90]
  ];
  const ga = new GalacticAge(35);

  test('creates a earthAge property with a value that is passed in', () => {
    expect(ga.earthAge).toEqual(35);
  });
  test.each(testBodies)('create property where bodies[%s] === %d',
    (planet, solarYear) => {
      expect(ga.bodies[planet]).toEqual(solarYear);
    }
  );
});
