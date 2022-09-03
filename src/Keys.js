/* eslint-disable no-multi-spaces */

/**
 * Number holds the button numbers from 1 - 9
 */
const Numbers = [
  {id: '7', label: '7', display: '7'},
  {id: '8', label: '8', display: '8'},
  {id: '9', label: '9', display: '9'},
  {id: '4', label: '4', display: '4'},
  {id: '5', label: '5', display: '5'},
  {id: '6', label: '6', display: '6'},
  {id: '1', label: '1', display: '1'},
  {id: '2', label: '2', display: '2'},
  {id: '3', label: '3', display: '3'},
];

const Misc = [
  {id: '0',  label: '0',  display: '0'},
  {id: '.',  label: '.',  display: '.'},
  {id: '00', label: '00', display: '00'},
];

const Operators = [
  {id: 'delete',   label: 'del', display: ''},
  {id: 'AC',       label: 'AC',  display: ''},
  {id: 'multiply', label: '*',   display: ' * '},
  {id: 'divide',   label: '/',   display: ' / '},
  {id: 'plus',     label: '+',   display: ' + '},
  {id: 'minus',    label: '-',   display: ' - '},
  {id: 'Ans',      label: 'Ans', display: 'Ans'},
  {id: 'equals',   label: '=',   display: ''},
];

/**
 * Bracket stores parenthesis ['(', ')']
 */
const Bracket = [
  {id: 'open parenthesis',  label: '(', display: '('},
  {id: 'close parenthesis', label: ')', display: ')'},
];

/**
 * Trigonometry stores trigonometric functions
 */
const Trigonometry = [
  {id: 'sin', label: 'sin', display: 'sin('},
  {id: 'cos', label: 'cos', display: 'cos('},
  {id: 'tan', label: 'tan', display: 'tan('},
];

export {Numbers, Misc, Operators, Bracket, Trigonometry};
