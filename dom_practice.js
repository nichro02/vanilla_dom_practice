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


for (item in listItems) {
    if(listItems[item].innerText === "Dairy Queen") {
        listItems[item].style.color = "red"    
    } else {
        listItems[item].style.color = "blue"
    }
    
}

//Change innerText of an li element to "Jamboree sandwich at the Jambo-ree"
listItems[0].innerText = "Jamboree sandwich at the Jambo-ree"

//Create new img element and add attribute
const dq = document.createElement("img")
dq.setAttribute("src", "https://images.all-free-download.com/images/graphiclarge/dairy_queen_logo2_28735.jpg")

//Append image to page
listItems[2].appendChild(dq)

//Removing an element
const footer = document.querySelector("footer")

footer.remove()
