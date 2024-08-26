let username = document.querySelector("#user-name");
let useremail = document.querySelector("#user-email");
let userphoneno = document.querySelector("#user-phoneno");
let useraddress = document.querySelector("#user-address");
let submitbutton = document.querySelector("#place-button");
let orderPlacedDiv = document.querySelector("#order-placed");

// Script URL for Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwufPUX44o5FisSg50c37atADOP7dOWNRu8QB-8BIVZVDNbq4AWQOh1tR8iVOMzX4ojiA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate fields
  var name = username.value.trim();
  var email = useremail.value.trim();
  var phone = userphoneno.value.trim();
  var address = useraddress.value.trim();

  if (!name || !email || !phone || !address) {
    alert("Input fields cannot be empty.");
    return;
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      document.getElementById("buy-text").style.display = "none";
      document.querySelectorAll(".form-data").forEach(function (element) {
        element.style.display = "none";
      });
      submitbutton.style.display = "none";

      orderPlacedDiv.style.display = "block";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});
