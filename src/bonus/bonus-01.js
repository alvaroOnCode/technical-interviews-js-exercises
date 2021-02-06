/**
 * Check if a pattern is well formed
 */

const test1 = '([{} ])';
const test2 = '{  {][ }';
const test3 = ')()';
const test4 = '(([  { {{ }}}]))';
const test5 = '{[[[{  {{((( )))}}}]]]}';

function findPair(symbol) {
  if (!['(', '[', '{'].includes(symbol)) return '';

  const dictionary = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  return dictionary[symbol];
}

function validate(str) {
  if (!['(', '[', '{'].includes(str.charAt(0))) return '⛔ First symbol is wrong!';

  const array = str.replace(/\s/g, '').split('');

  if (array.length % 2 > 0) return '⛔ Total symbols must be even!';

  let counter = 0;

  for (let i = 0; i < array.length / 2; i++) {
    if (findPair(array[i]) === array[array.length - 1 - i]) {
      counter += 1;
    }
  }

  const result = array.length * 0.5 === counter;

  return `${result ? '✅' : '❌'} ${str} is a ${
    result ? 'right' : 'wrong'
  } pattern.`;
}

console.log(validate(test1));
console.log(validate(test2));
console.log(validate(test3));
console.log(validate(test4));
console.log(validate(test5));
