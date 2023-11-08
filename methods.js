// document object model

// a) methods
// 1) querySelectorAll() - access one or more elements from the DOM that matches one or more CSS selectors
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => (paragraph.style.display = "inline"));

// 2) createElement() - create a specified element and insert it into the DOM
const paragraphFour = document.createElement("p");
const containerDiv = document.querySelector("#container-div");
paragraphFour.innerHTML = "Four";
paragraphFour.style.display = "inline";
containerDiv.append(paragraphFour);

// 3) getElementById() - get an element from the document by its unique id attribute
const thirdParagraph = document.getElementById("p-three");
thirdParagraph.style.color = "red";

// 4) getElementsByTagName() - access one or more elements by their HTML tag name
const paragraphTags = document.getElementsByTagName("p");
paragraphTags[1].style.textDecoration = "underline";

// 5) appendChild() - adds an element as the last child to the HTML element that invokes this method
const fifthParagraph = document.createElement("p");
fifthParagraph.innerHTML = "Five";
fifthParagraph.style.display = "inline";
fifthParagraph.style.marginLeft = "20px";
containerDiv.appendChild(fifthParagraph);

// 6) addEventListener() - attaches an event listener to your element
const clickButton = document.getElementById("click");
clickButton.style.marginTop = "10px";
clickButton.addEventListener("click", () => {
  console.log("clicked");
});

// 7) replaceChild() -  replaces one child element with another new or existing child element
const newThirdParagraph = document.createElement("p");
newThirdParagraph.innerHTML = "New Third";
newThirdParagraph.style.display = "inline";
newThirdParagraph.style.color = "blue";
containerDiv.appendChild(newThirdParagraph);
containerDiv.replaceChild(newThirdParagraph, thirdParagraph);

// 8) setAttribute() - set or change the value of an element's attribute
newThirdParagraph.setAttribute("class", "worst");

// 9) getAttribute() -
console.log(newThirdParagraph.getAttribute("class"));

// 10) removeChild() -
const removeButton = document.querySelector('#remove-btn');
const firstParagraph = document.querySelector('#p-one');
removeButton.addEventListener('click', function() {
  containerDiv.removeChild(firstParagraph)
})