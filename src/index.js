import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import GalacticAge from './js/galactic-age';

const outputSel = $('#output');
const inputSel = $('#user-age');

function bold(text) {
  return `<span class='big-and-bold'>${text}</span>`;
}

function createListItem(item) {
  return `<li>${item}</li>`;
}

function clearOutput() {
  outputSel.text('');
}

function determineYearsLeftOutput(years, currAge, maxAge) {
  let outStr = '';

  if (currAge > maxAge) {
    outStr = `you have lived ${bold(Math.abs(years))} years past your lie expectancy!`;
  } else {
    outStr = `you have ${bold(years)} years left to live!`;
  }
  return outStr;
}

function displayAges(inputVal) {
  const ga = new GalacticAge(inputVal);
  clearOutput();

  ga.getPlanets().forEach(planet => {
    const yearsLeft = determineYearsLeftOutput(ga.getYearsLeft(planet), inputVal, ga.maxAge);
    const item = `Your age on ${bold(planet)} is ${bold(ga.getAge(planet))} ` +
      `years and ${yearsLeft}`;
    outputSel.append(createListItem(item));
  });
}

$('#find-age').on('click', () => {
  displayAges(inputSel.val());
});