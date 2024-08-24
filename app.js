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
