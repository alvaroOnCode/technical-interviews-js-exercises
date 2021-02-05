/**
 * Implement a client-side service method to fetch a list of users from the server resource and filter them according to given set of options.
 *  - Consider only the following filter options: city starts with 'South', minSuite and maxSuite.
 *  - Not all filter options must be used at once - some or all of them might be omitted.
 */

async function fetchMovies(source, options) {
  const response = await fetch(source);
  let data = await response.json();

  data = data.filter((item) => {
    let count = 0;

    Object.keys(options).forEach((key) => {
      if (key === "city" && item.address.city.startsWith(options[key])) {
        count++;
      }

      const suite = parseInt(item.address.suite.split(/\s/)[1], 10);

      if (key === "minSuite" && suite >= options[key]) {
        count++;
      }

      if (key === "maxSuite" && suite <= options[key]) {
        count++;
      }
    });

    return count === Object.keys(options).length;
  });

  return data;
}

const source = "https://jsonplaceholder.typicode.com/users";

const opts = {
  city: "South",
  minSuite: 500,
  maxSuite: 950,
};

(async () => {
  const result = await fetchMovies(source, opts);
  console.log("result:", result);
})();
