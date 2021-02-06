/**
 * Does JavaScript always pass parameters by value or by reference?
 * Select the most accurate answer:
 * 
 * 1️⃣ By reference
 * 2️⃣ Depends on the parameter type
 * 3️⃣ By value
 * 4️⃣ Prefixing the parameter with '&' will pass it by reference
 */

// Solution is 2️⃣

const programmer = {
  firstName: 'Álvaro',
  lastName: 'Saavedra',
};

const quote = 'I ❤️ JavaScript'

function removeFirstName(param) {
    param.firstName = '';
}

function tryToRemoveQuote(param) {
    param = '';
}

removeFirstName(programmer);

console.log(programmer);
console.log(`${!programmer.firstName ? '✅ First name was removed because objects are passed by reference.' : '🔥 Error!'}`);

tryToRemoveQuote(quote);

console.log(quote)
console.log(`${quote.length ? '✅ Quote still stays because strings are passed by values.' : '🔥 Error!'}`)

