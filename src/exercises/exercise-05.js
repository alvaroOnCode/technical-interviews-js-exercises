/**
 * You want to update the following element with the XMLHttpRequest status:
 * 
 * <div id="status-code"></div>
 */

// Solution

((req) => {
  // Next code should go inside the request callback
  const div = document.getElementById('status-code');
  div.textContent = req.status;
})();