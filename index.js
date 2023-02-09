// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
  return cats;
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
  return cats;
}

function appendCat(name) {
  const newCats= [...cats.slice(), name];
  return newCats;
}

function prependCat(name) {
  const newCats= [name, ...cats.slice()];
  return newCats;
}
  
function removeLastCat() {
  const newCats = cats.slice(0, cats.length - 1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1, cats.length);
  return newCats;
}



//console.log(removeLastCat())