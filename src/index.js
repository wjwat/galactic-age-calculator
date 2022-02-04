import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import GalacticAge from './js/galactic-age';

const outputSel = $('#output');
const inputSel = $('#user-age');

function displayAges(inputVal) {
  let ga = new GalacticAge(inputVal);

  ga.getPlanets().forEach(planet => {
    outputSel.append(planet + ': ' + ga.getAge(planet) + '<br>');
  });
}

$('#find-age').on('click', () => {
  displayAges(inputSel.val());
});