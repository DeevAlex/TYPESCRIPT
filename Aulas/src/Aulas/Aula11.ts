// Union Types
function addOrContact(
  a: number | boolean | string, // ou number ou boolean ou string, porém tem q fazer essas checagens
  b: number | boolean | string,
) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // if (typeof a === 'string' && typeof b === 'string') return a + b; assim gera mais uma possibilidade que é a undefined
  return `${a}${b}`; // assim a possibilidade só é number e string
}

console.log(addOrContact(5, 5));
console.log(addOrContact('A', 'B'));
console.log(addOrContact(true, true));
