let username = document.querySelector("#user-name");
let useremail = document.querySelector("#user-email");
let userphoneno = document.querySelector("user-phoneno");
let usreaddress = document.querySelector("user-address");
let submitbutton = document.querySelector("#palce-button");

let aboutpage = document.querySelector("#about-page");

let buttonbuy = document.querySelector(".button-buy1");

// ----------------------- Details ------------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwufPUX44o5FisSg50c37atADOP7dOWNRu8QB-8BIVZVDNbq4AWQOh1tR8iVOMzX4ojiA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      location.reload(); // Refresh the page after successful submission
    })
    .catch((error) => console.error("Error!", error.message));
});

// -------------------- About Page on click -----------------------

document
  .getElementById("place-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get input fields
    var name = document.getElementById("user-name").value.trim();
    var email = document.getElementById("user-email").value.trim();
    var phone = document.getElementById("user-phoneno").value.trim();
    var address = document.getElementById("user-address").value.trim();

  
    if (!name || !email || !phone || !address) {
      alert("Input fields cannot be empty.");
      return;
    }

    document.getElementById("buy-text").style.display = "none";
    document.querySelectorAll(".form-data").forEach(function (element) {
      element.style.display = "none";
    });
    document.getElementById("place-button").style.display = "none";

    // Show order placed message
    document.getElementById("order-placed").style.display = "block";
  });
