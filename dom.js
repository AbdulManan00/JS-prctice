(function () {
	document.querySelector("ul li:nth-child(3)").style.backgroundColor = "red";
	document.querySelector(".change").style.backgroundColor = "orange";
	document.getElementById("change-color").style.color = "blue";
	console.log("object");
	console.log(+document.querySelector("#change-color"));
})();
document
	.querySelectorAll("ul li:nth-child(1)")
	.forEach((item) => (item.style.backgroundColor = "red"));
const two = document.querySelectorAll("li");
two[1].style.backgroundColor = "green";
const listIs = document.querySelector("ul");
console.log("🚀 -------------------🚀");
console.log("🚀 ~ listIs:", listIs);
console.log("🚀 -------------------🚀");
const div = document.createElement("li");
div.innerText = "hello world";
document.body.style.backgroundColor = "whitesmoke";

div.setAttribute("id", "addedDiv");
div.style.backgroundColor = "yellow";
// div.style.padding = "20px";
document.querySelector("ul").appendChild(div);
function addLanguage(lagName) {
    const languageDiv = document.createElement("li");
    languageDiv.innerText = lagName;
    document.querySelector("ul").appendChild(languageDiv);

  }
  
  addLanguage("JavaScript");
  const oldLan=document.querySelector("li:nth-child(5)");
  const newLan=document.createElement("li");
  newLan.innerText="C++";
  oldLan.replaceWith(newLan)
  const removeLan=document.querySelector("li:nth-child(3)");
  removeLan.remove();