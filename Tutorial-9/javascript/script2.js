const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[1];

const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode);

const textNode1 = htmlElementNode.childNodes[1];


const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);

// console.log(bodyElementNode.parentNode);

// console.log(headElementNode.nextSibling);

const childHeadELementNode = headElementNode.childNodes;
const childBodyELementNode = bodyElementNode.childNodes;
// console.log(childBodyELementNode[1].childNodes[1]);

const titlebodyElementNode = childBodyELementNode[1].childNodes[1];
// console.log(titlebodyElementNode);

const container = document.querySelector(".container")
console.log(container.children);