export default function hendlerFone(fone) {
  const regExp = /\d/ig;
  const figures = fone.match(regExp);
  const string = figures.join('');
  let output = 0;
  if (string.length > 11) {
    const plus = fone[0] === '+' ? '+' : '';
    output = plus + string;
    return output;
  }
  if (string[0] === '8') {
    const seven = '+7';
    output = seven + string.slice(1);
  } else {
    const pluss = '+';
    output = pluss + string;
  }
  return output;
}
