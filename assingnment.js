//Array operators
var rollNum=[12,3,23,6,8,9,1];
console.log(rollNum);
for(let i=0;i<rollNum.length;i++){
    console.log(rollNum[i]);
} 
rollNum[2]=45;
console.log(rollNum);

var index=rollNum.push(5);
console.log(index);
console.log(rollNum);

var index=rollNum.pop(5);
console.log(index);
console.log(rollNum);

rollNum.unshift(34);
console.log(rollNum);

console.log(rollNum.shift(34));
console.log(rollNum);

var array=rollNum.slice(1,4);
console.log(array);

var element=(array.pop());
console.log(element);
console.log(array);

console.log(array.shift());
console.log(array);

console.log(rollNum.splice(87,90,37,870));
console.log(rollNum);

var num=[43,24,1,7,5,9,6,2,4];
console.log(num);
for(let i=0;i<num.length;i++){
    console.log(num.length);
}
num[3]=21;
console.log(num);

var no=num.push(90);
console.log(no);
console.log(num);

// console.log(num.pop());  this is also possible to achive pop
// console.log(num);
var no=num.pop(90);
console.log(no);
console.log(num);

num.unshift(89);
console.log(num);

console.log(num.shift());
console.log(num);

var arr=num.slice(0,4);
console.log(arr);

var deleted=(arr.pop());
console.log(deleted);
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(num.splice(56,80,30,70));
console.log(num);

//arithmetic operators
function arithmetic(a,b){
    var sum=a+b;
    return sum;
}
var sumOfNum=arithmetic(3,6);
console.log(sumOfNum);

function minus(c,d){
    var sub=c-d;
    return sub;
}
var substraction=minus(8,3);
console.log(substraction);

function multi(e,f){
    var mul=e*f;
    return mul;
}
var multiplication=multi(3,4);
console.log(multiplication);

function divi(g,h){
    var div=g/h;
    return div;
}
var division=divi(8,4);
console.log(division);

function modu(i,j){
    var mod=i%j;
    return mod;
}
var modulus=modu(9,6);
console.log(modulus);


//higher order function
let ref=[20,50,80,60,10];
//20*10,50*10,80*10
let updatedArray=ref.map((elements) => {
    return elements*10;
});
console.log(updatedArray);

// let arrowFunction=()=>{
//     alert("This is Arrow Function");
// }
// arrowFunction();

let authentication=()=>{
    alert("Authentication Required");
}
authentication();

 console.log(ref)
 let filteredElements=ref.filter(function(element){
     var output=element>10
     return output;
 })
console.log(filteredElements);

console.log(ref)
ref.filter(element=>
    {return element>10;
});

console.log(filteredElements);
console.log(ref)
var reduce=ref.reduce(function(curr,acc){     //acc=accumaletor  //curr-->current
    var sum=curr+acc;
    return sum;
})
console.log(reduce);

console.log(ref)
var reduce=ref.reduce((curr,acc) => {
    sum=curr+acc;
    return sum;
})
console.log(reduce);

console.log(ref);
// var slice=ref.slice(2)
// console.log(slice);
// console.log(ref.slice())

var splice=ref.splice();
console.log(splice);

