let a ='manan'
var b='heeloo'
const c ='nice one'
let d='10'
let e=Number(d)
// console.log(typeof e);
const heroes=["batman","superman","spiderman"]
const heroes2={
    "batman":"hero",
    "superman":"hero",
    "spiderman":"hero"
}
const myFunction = function () {
    console.table([heroes]);
    
}
// myFunction()
// let name= new String("manan")
// console.log(name);
let name ={
    name:'manan',
}
let name2=name;
 name2.name='Asif';
// console.table([name,name2]);
let myDate = new Date();
// console.table([myDate.toDateString(),myDate.toJSON()]);
let myDate2 = new Date("08/01/2000");
// console.log(myDate2.toLocaleString());
// console.log(Date.now());
// console.log(myDate.toLocaleString('default',{timeZone:'Asia/Kolkata'}));
let arr=[1,2,3,4,5]
let arr1=[6,7,8,9,10]
let arr2=[...arr,...arr1]
// console.log(arr2);
let year=Symbol(3000);
let obj={
    name:'manan',
    age:20,
[year]:year
}
// console.log(obj.name);
// console.log(obj['age']);
console.log(typeof obj[year]);