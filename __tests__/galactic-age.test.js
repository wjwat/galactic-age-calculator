import GalacticAge from './../src/js/galactic-age.js';

describe('GalacticAge', () => {
  test('constructor creates a earthAge property with a value that is passed in', () => {
    const ga = new GalacticAge(35);
    expect(ga.earthAge).toEqual(35);
  });
});
