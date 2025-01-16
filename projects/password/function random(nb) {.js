function random(nb) {
  return Math.floor(Math.random() * nb)
}

console.log(random(5));


const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function getLetter() {
  return Math.random(alphabet);
}
