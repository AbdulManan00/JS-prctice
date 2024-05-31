// let a = "manan";
// var b = "heeloo";
// const c = "nice one";
// let d = "10";
// let e = Number(d);
// // console.log(typeof e);
// const heroes = ["batman", "superman", "spiderman"];
// const heroes2 = {
// 	batman: "hero",
// 	superman: "hero",
// 	spiderman: "hero",
// };
// const myFunction = function () {
// 	console.table([heroes]);
// };
// // myFunction()
// // let name= new String("manan")
// // console.log(name);
// let name = {
// 	name: "manan",
// };
// let name2 = name;
// name2.name = "Asif";
// // console.table([name,name2]);
// let myDate = new Date();
// // console.table([myDate.toDateString(),myDate.toJSON()]);
// let myDate2 = new Date("08/01/2000");
// // console.log(myDate2.toLocaleString());
// // console.log(Date.now());
// // console.log(myDate.toLocaleString('default',{timeZone:'Asia/Kolkata'}));
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 7, 8, 9, 10];
// let arr2 = [...arr, ...arr1];
// // console.log(arr2);
// let year = Symbol(3000);
// let obj = {
// 	name: "manan",
// 	age: 20,
// 	[year]: year,
// };
// // console.log(obj.name);
// // console.log(obj['age']);
// // console.log(typeof obj[year]);
// obj.greeting = function () {
// 	console.log("hello");
// };
// obj.greeting2 = function () {
// 	console.log(`hello ${this.name} ${this.age}`);
// };
// // console.log(obj.greeting());
// // console.log(obj.greeting2());
// // console.log(Object.entries(obj));
// // console.log(obj.hasOwnProperty('greeting2'));
// // console.log(2==='2');
// const addTwo = () => {
// 	return 2 + 2;
// };
// // console.log(addTwo())
// let obj2 = {
// 	name: "manan",
// 	age: 20,
// 	myFunction: function () {
// 		console.log(`Hello ${this.name}!`);
// 	},
// };
// // console.log(obj2.myFunction());
// // ((name)=>{
// //   console.log("Inner anonymous function called "+name);
// // })('manan');
// // ((name)=>{
// //   console.log("outer anonymous function called "+name);
// // })('manan');
// let obj3 = {
// 	name: "john",
// 	age: 25,
// };

// // Spread the object properties into an array
// let arr3 = ["manan", "heeloo", ...Object.values(obj3)];
// // console.log(arr3);

// let arr4 = ["a", "b", "c"];
// arr4.forEach(function (val) {
// 	// console.log(val)
// });
// let arr5 = ["a", "b", "c"];
// arr5.forEach((nn, i, c) => {
// 	// console.log(nn + i, c);
// });
// let arr6 = [
// 	{ name: "manan", age: 20 },
// 	{ name: "heeloo", age: 30 },
// 	{ name: "nice one", age: 40, num: 33 },
// ];

// arr6.forEach((item) => {
// 	// console.log(item.num);
// });

// // (function n(){
// // console.log('object');
// // })();

// // (()=>{
// //     console.log('object');
// //     })()

// // let sum=(a,b)=>{
// // 	console.log(a+b);
// // }

// // let calSum=(aaa,bbb,sss)=>{
// // sss(aaa,bbb);
// // }
// // calSum(1,2,sum);
// // const calculator = (a, b, c) => {
// // 	if (c === "+") {
// // 		return a + b;
// // 	} else if (c === "-") {
// // 		return a - b;
// // 	} else if (c === "*") {
// // 		return a * b;
// // 	} else if (c === "/") {
// // 		return a / b;
// // 	}
// // 	else {
// // 		return "Invalid operator";
// // 	}
// // };
// // const getResult=(a,b,c,calcCallback)=>{
// // 		console.log(calcCallback(a,b,c));
// // }
// // getResult(10,2,'-',calculator);

// function getData(id, callback) {
// 	setTimeout(() => {
// 		console.log("get data called " + id);
// 		callback();
// 	}, 2000);
// }
// getData(1, () => {
// 	getData(2, () => {
// 		getData(3, () => {
// 			getData(4, () => {
// 				console.log("All data retrieved.");
// 			});
// 		});
// 	});
// });
// async function hello(){
//  console.log('Hello');
// }
 