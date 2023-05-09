'use strict';

module.exports = function(settings) {
  // TODO Perform some action.
  fetch('https://reqres.in/api/users')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
        function checkEmpty() {
          const input = document.getElementById("url");
          const warning = document.getElementById("warning");
          if (input.value.trim() === "") {
            warning.style.display = "block";
            input.style.borderColor = "red";
          } else {
            warning.style.display = "none";
            input.style.borderColor = "black";
          }

        }
};
