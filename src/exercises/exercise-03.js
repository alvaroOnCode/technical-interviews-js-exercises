/**
 * Implement asyncTimeout function which accepts time in milliseconds.
 * It returns Promise which resolves after the given time.
 */

function asyncTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Sucess in ${ms} milliseconds!`);
    }, ms);
  });
}

asyncTimeout(1024).then((message) => {
  console.log(message);
});

asyncTimeout(2048).then((message) => {
  console.log(message);
});
