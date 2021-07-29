

//upon submit validating and showing confirmation mssg
function contactValidation() {
    
    //validate email
    const email = document.getElementById("email");
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
   
    //validate name is required
    //to do: add name requirement
    const name = document.getElementById("name");

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


//this function is hidding the form upon sucessful validation and showing the confirmation message
function confirmationMessage() {
    var x = document.getElementById("contact_form");
    //getting the hidden confirmation control
    const confirmationMessage = document.getElementById("confirmationMessage");
    
    
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
    }
  }
