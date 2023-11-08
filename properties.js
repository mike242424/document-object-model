// document object model

// b) properties
// 1) innerHTML - access the text content of an element
const thirdInnerHTML = thirdParagraph.innerHTML;
console.log("innerHTML", thirdInnerHTML);

// 2) childNodes - accesses the child nodes of a selected parent‌‌
const unorderedListTag = document.querySelector("#unordered-list");
console.log(unorderedListTag.childNodes);

// 3) firstChild - accesses the first child of a selected parent‌‌
const firstChild = unorderedListTag.firstChild;
console.log(firstChild);

// 4) lastChild - accesses the last child of a selected parent.‌‌
const lastChild = unorderedListTag.lastChild;
console.log(lastChild);

// 5) parentNode - accesses the parent of a selected child node.‌‌
const parentNode = firstChild.parentNode;
console.log(parentNode);

// 6) nextSibling - accesses the next consecutive element (sibling) of a selected element
const firstLi = document.querySelector('#first-li');
const nextSibling = firstLi.nextSibling;
console.log(nextSibling);

// 7) previousSibling -  accesses the previous element (sibling) of a selected element
const previousSibling = firstLi.previousSibling;
console.log(previousSibling);
