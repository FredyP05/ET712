// Add an event listener for keydown event
document.addEventListener("keydown", function (event){
    // prompt the ASCII code of the pressed key
    console.log(`ASCII code of key pressed: ${event.keyCode}`);
    // prompt the pressed key
    console.log(`Key '${event.key}' was pressed`);
    // prompt the ASCII code of the pressed key using 'which'  
    console.log(`ASCII code of key pressed: '${event.which}' `); 
});

// class toggle example
// collect element
let btnpressme = document.querySelector("button.btnpressme")
// add event
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent ==="PRESS ME"){
        e.target.textContent = "Button was pressed!"
    }
    else{
        e.target.textContent = "PRESS ME"
    }
    // toggle class in a button
    e.target.classList.toggle("btnactive")
})
// PREVENT DEFAULT EXAMPLE
// collect element
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener('click', function(event){
    event.preventDefault()
    alert("Website out of service")
})

// MODAL WINDOW
// collect element
let modalwindow = document.querySelector(".modalwindow")
let closemodalx = document.querySelector(".closemodalx")
let btnpromotion = document.querySelector(".btnpromotion")
let btnopenmodal = document.querySelector(".btnopenmodal")
// add an event ot open the modal window
btnopenmodal.addEventListener("click", function(){
    modalwindow.style.display = "block"
})
// add an event to close the modal window
closemodalx.addEventListener("click", function(){
    modalwindow.style.display = "none"
})
btnpromotion.addEventListener("click", function(){
    modalwindow.style.display = "none"
})
