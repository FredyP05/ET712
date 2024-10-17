// select the element
let squarediv = document.querySelector('.square')
// add an event
squarediv.onclick = function(){
    squarediv.style.backgroundColor = "magenta"
}

// select the element
let btnanimal = document.querySelector(".btnanimal")
let animalsdiv = document.querySelector(".animalsdiv")
// list of animals
let animals = ['fish', 'dog', 'turtle', 'cat', 'spider']
// add event
btnanimal.onclick = function(){
    animalsdiv.textContent = animals[Math.floor(Math.random()*5)]
}

// MOUSE EVENT
// select an element
let numberdiv = document.querySelector(".numberdiv")
// add a mouseout event
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
// function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
// add a click event
numberdiv.onclick = function(){
    numberdiv.style.backgroundColor = pickcolor()
}

// EXERCISE
let counter = 1
let circle = document.querySelector(".circle")
// add a mouseover event
circle.onmouseover = function(){
    circle.textContent = counter ++
}
// resetting counter
let reset = document.querySelector(".reset")
reset.onclick = function(){
    circle.textContent = counter = 0
}