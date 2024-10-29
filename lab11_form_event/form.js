// collect the components
const myForm = document.querySelector("#myForm")
const greetingspan = document.querySelector(".greeting p span")

// add submit event to form
myForm.addEventListener("submit", function(e){
    e.preventDefault()

    // collect components when the submit button is clicked
    const username = document.querySelector("#username")
    const usernamevalue = username.value

    // display a warning message if the username was not entered
    if(usernamevalue.trim() ===""){
        alert("Please enter a username")
        return
    }

    // display the username in the greeting paragraph
    greetingspan.textContent = usernamevalue

    // clear the username text field
    username.value = ""
})

/**
 * FORM VALIDATION
 */
// collect components
let passworderror = document.querySelector("#passworderror")
let btnlogin = document.querySelector(".btnlogin")
let passwordform = document.querySelector("#passwordform")
let passwordinput = document.querySelector("#password")

// disable the login button
window.addEventListener("load", function(){
    btnlogin.disabled = true
})
// add input event to the password field
passwordinput.addEventListener("input", function(){
    // get the password value
    const passwordcount = passwordinput.value
    // check if the password has 8+ characters
    if(passwordcount.length<8){
        passworderror.textContent = "Password must be 8+ characters long"
    }
    else{
        passworderror.textContent = ""
        btnlogin.disabled = false
    }
})