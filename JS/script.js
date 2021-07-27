const submitButton = document.getElementById("submit");
let name = document.getElementsById("name");

submitButton.addEventListener("click", sayThanks)

function sayThanks() {
    alert("Thank you ${name} for your request! We will get back with you as soon as possible to bring your idea to life!");
}

function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }