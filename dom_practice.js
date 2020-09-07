//Test
//console.log('hello world')

//Manipulate the DOM
//const h1 = document.querySelector('h1')
//console.log(h1)

//const list = document.querySelectorAll('li')
//console.log(list)

//Assign element with id to variable
const intro = document.querySelector("#intro")
console.log(intro)

//Grab h2 element
const h2 = document.querySelector("h2")
console.log(h2)

//Add exclamations to h2
h2.innerText = h2.innerText+"!!!"

//Assign elements with class to variable
//Should return array because multiple elements have been assigned to class "header"
const header = document.querySelectorAll(".header")
console.log(header)

//Change color of an li element
const listItems = document.querySelectorAll("li")
console.log(listItems)
listItems[2].style.color = "red"