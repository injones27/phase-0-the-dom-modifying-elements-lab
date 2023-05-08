// Write your code here!
const main = document.querySelector("main");
main.remove();

const newHeader = document.createElement('h1');
// newHeader has id of "victory"
// document.body.(newHeader);
// newHeader.setAttribute("id", "victory");
// newHeader.add("id", "victory");
newHeader.id = "victory";
newHeader.textContent = "Isaiah is the champion"