let emailInput = document.getElementById('email-input')
let errorMsg = document.getElementById("invalid-message");
let submitBtn = document.getElementById("email-submit");
let formNews = document.getElementById("sign-up")
let formSuccess = document.getElementById("success-form")

emailInput.addEventListener('input', function() {
    if (emailInput.validity.typeMismatch) {
      errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
    }
    submitForm()
}), 

submitBtn.addEventListener('click' , function() {
    if (emailInput.validity.typeMismatch || emailInput.value === "") {
    errorMsg.style.display = "block";
    formNews.style.display = "flex";
    }
        else
        {
            formNews.style.display = "none";
            formSuccess.style.display = "flex";
        }
        submitForm(event);
})

formSuccess.addEventListener('click', () => {
    formNews.style.display = "flex";
    formSuccess.style.display = "none";
})

//prevent refresh
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}