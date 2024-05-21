// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item) => {});
// let res=arr.filter((item) => {
// 	return item;
// } );
// console.log(res);
// let arr2 = [
// 	{ name: "manan", age: 20 },
// 	{ name: "aaa", age: 33 },
// 	{ name: "bbb", age: 44 },
// ];
// let value = arr2.forEach((item) => {
// 	return item.age;
// });

// function add(i,j){
// 	console.log(' object ' +i);
// 	console.log(' JJJjjjj ' +j);
// }

// add(122,()=>{
// 	console.log('object clicked with value ' + i);
// });

// const url = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
// 	let response = await fetch(url);
// 	// console.log('hello  ',response);
// 	let data = await response.json();
// 	// console.log(data[0].text);
// };
// getFacts();

//  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  arr.forEach((res)=>{
// 	console.log(res**2 );
//  })
// // console.log(arr);
// // console.log(arr.slice(0, 3),'sliceeee');
// // console.log(arr);
// console.log(arr.splice(8, 'a', 'b', 'c'));
// console.log(arr,'spliceee');

// let btn=document.createElement('button');
// btn.innerText='Click Me';
// btn.style.color='white';
// btn.style.backgroundColor='red';
// let body=document.querySelector('body');
// body.prepend(btn);

// Array.prototype.Manan = function () {
// 	console.log("Manan");
// };
// arr={a:1};
// arr.Manan()
// console.log(arr);

// function name() {
//     let anme='manan'
//     console.log(name2);
//     name2()
//     function name2() {
//         console.log(anme);
//         name2='gggghg'
//     }
// }
// name()

// function color(c) {
//     // document.body.style.backgroundColor=c
//     return ()=>{
//         document.body.style.backgroundColor='red'
//     }
// }

// document.querySelector('.setStartBtn').onclick=color('blue')

// let obj = {
// 	name: "manan",
// 	age: 20,
// };
// let [{age:aa}]=obj;
// console.log('aa',age);

// const obj={
//     name:'manan',
//     age:20,
//     city:'delhi'
// }
//  const{name:a,age:b,city:c}=obj;
// console.log(a,b,c);

// let obj2={
//     name:'manan',
//     age:20
// }
// console.log({...obj2,name:'Abdul Manan', age:24 });


let p1 = new Promise((resolve) => {
	resolve("manan " + 122);
})
	.then((res) => {
		return res.toUpperCase();
	})
	.then((res) => {
		return res.slice(0, 3);
	}).then(function(res){
		console.log(res.toLowerCase());

    })
	
let p2 = new Promise((resolve, reject) => {
	reject("My   error");
}).catch((err) => {
	console.log(err);
});
 



let btn=document.createElement('button');
btn.innerText='Click Me';
document.querySelector('body').prepend(btn);
let body2=document.querySelector('body');
btn.addEventListener('click',()=>{
if(body2.style.backgroundColor==='white'){
	body2.style.backgroundColor='black';
}
else{
		body2.style.backgroundColor='white';
}
})

const buttons = document.querySelectorAll(".btn1");
console.log("🚀 ---------------------🚀");
console.log("🚀 ~ buttons:", buttons);
console.log("🚀 ---------------------🚀");
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

const clock = document.getElementById("clock");
setInterval(() => {
	let date = new Date();
	clock.innerText = date.toLocaleTimeString();
}, 1000);

const hiddenP = document.querySelector(".hidden-p");
const showBtn = document.querySelector(".hide-button");

function revealContent() {
	if (hiddenP.classList.contains("show-p")) {
		hiddenP.classList.remove("show-p");
	} else {
		hiddenP.classList.add("show-p");
	}
	if (showBtn.innerText === "Show") {
		showBtn.innerText = "Hide";
	} else {
		showBtn.innerText = "Show";
	}
}
showBtn.addEventListener("click", revealContent);

document.querySelector("#parent-1").addEventListener("click", (e) => {
	const target = e.target;

	if (target.matches("li")) {
		target.style.backgroundColor = "red";
	}
});

const randomColors = () => {
	const hexColor = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += hexColor[Math.floor(Math.random() * 16)];
	}
	return color;
};
let intervalId;
const changingColor = function () {
	if (!intervalId) {
		intervalId = setInterval(() => {
			document.body.style.backgroundColor = randomColors();
		}, 100);
	}
};

const stopChangingColor = function () {
	clearInterval(intervalId);
	intervalId = null;
};
document.querySelector(".setStartBtn").addEventListener("click", changingColor);

document
	.querySelector(".setStopBtn")
	.addEventListener("click", stopChangingColor);
const key=document.querySelector(".key");
window.addEventListener("keydown",(e)=>{
	key.innerHTML=`
	<div class="keyColor" style="border: 1px solid black;">
	<table>
	<tr>
	<th >Key</th>
	<th>Code</th>
	</tr>
	<tr>
	<td>${e.key===' '?'Space':e.key}</td>
	<td>${e.code}</td>
	</tr>
	</table>
	</div>
	`;
})
