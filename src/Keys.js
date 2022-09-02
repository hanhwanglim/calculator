const Numbers = [];

for (let i = 0; i < 10; i++) {
  Numbers.push({
    id: i.toString(),
    label: i.toString(),
    display: i.toString(),
  });
}

const Operators = [
  {
    id: 'plus',
    label: '+',
    display: ' + ',
  },
  {
    id: 'minus',
    label: '-',
    display: ' - ',
  },
  {
    id: 'multiply',
    label: '*',
    display: ' * ',
  },
  {
    id: 'divide',
    label: '/',
    display: ' / ',
  },
  {
    id: 'equals',
    label: '=',
  },
  {
    id: 'delete',
    label: 'del',
  },
];

const Trigonometry = [
  {
    id: 'sin',
    label: 'sin',
    display: 'sin(',
  },
  {
    id: 'cos',
    label: 'cos',
    display: 'cos(',
  },
  {
    id: 'tan',
    label: 'tan',
    display: 'tan(',
  },
];

export {Numbers, Operators, Trigonometry};
