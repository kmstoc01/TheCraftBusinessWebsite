

//upon submit validating and showing confirmation mssg
function contactValidation() {
    
    //validate email
    const email = document.getElementById("email");
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
   
   
  var name = document.getElementById("name").value;
   if (name.length == 0) {
     alert("Please tell us your name");
     return false;
   }
    let isValid= false;
    if(emailValidator) {
        isValid= true;
    }

    //todo: add check for name require, if true, set isValid to true

    //if form passes validation, show confirmation message, hide form
    if(isValid) {
        confirmationMessage();
        event.preventDefault();  //this stop form submission from redirect back to itself
        return false; //returns false so the page stops any futher execution
    }
}


//this function is hidding the form upon sucessful validation and showing the confirmation messaage
function confirmationMessage() {
    var x = document.getElementById("contact_form");
    //getting the hidden confirmation control
    const confirmationMessage = document.getElementById("confirmationMessage");
    const name = document.getElementById("name").value; //this is the value in the name input box    
    const contactUsername = document.getElementById("contactUsername"); //is the placeholder element for the name in the contact field
    
    if (x.style.display === "none") {
        //this is showing the form
      x.style.display = "block";
      //hidding the confirmation control
      confirmationMessage.style.display = "none";
    } else {
        //this hides the form
      x.style.display = "none";
      //this shows the confirmation control
      confirmationMessage.style.display = "block";
      //add name from contact for to placeholder
      contactUsername.innerHTML += name;
    }
  }
