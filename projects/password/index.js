function random(nb) {
  if (isNaN(nb)) {
    return "error";
  } else {
    return Math.floor(Math.random() * nb);
  }
}
console.log(random("H"));
console.log(random(5));


const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function getLetter() {
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}
console.log(getLetter());



function makePassword(options = {}) {
  const size = options.size || 10; // Si option.size est truthy on l'utilise, s'il est falsy on utilise 10
  const withNumbers = options.withNumbers ?? true;
  let password = '';

  if (size < 8) console.warn("C'est pas bien");

  for (let i = 0; i < size; i++) {
    if (withNumbers && i % 2 === 0) {
      password += Math.floor(Math.random() * 10);
    } else {
      password += getLetter();
    }
  }
  return password;
}

const options = { size: 5, withNumbers: true }
console.log(makePassword(options));
