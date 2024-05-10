const buttons = document.querySelectorAll(".btn1");
const body = document.querySelector("body");
buttons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (event.target.id === "white") {
			body.style.backgroundColor = event.target.id;
            
		} else if (event.target.id === "orange") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "yellow") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "blue") {
			body.style.backgroundColor = event.target.id;
		}
	});
});
