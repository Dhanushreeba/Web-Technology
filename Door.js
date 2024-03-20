//var
var ref;
ref = "Door";
console.log(ref);

var height;
height = "12 feet";
console.log(height);

var locker;
locker = "smart";
console.log(locker);

var color;
color = "Brown";
console.log(color);

var mouseType;
mouseType = "Wireless";
console.log(mouseType);
console.log(mouseType, typeof (mouseType));

var sides;
sides = 6;
console.log(sides);

var tableColor;
tableColor = "red";
console.log(tableColor);

var latche;
latche = 1;
console.log(latche);

var lock;
lock = "manual";
console.log(lock);

//let
var let;
let = "Chandu";
console.log(let);

var let;
let = "peacock";
console.log(let);

var let;
let = "Chair";
console.log(let);

var let;
let = "1 sun";
console.log(let);

var let;
let = "Bottle";
console.log(let);

var let;
let = "pen";
console.log(let);

var let;
let = "shops";
console.log(let);

var let;
let = "wheel";
console.log(let);

var let;
let = "Dress";
console.log(let);

var let;
let = "coffee mug";
console.log(let);

//const
const name = "Varsha";
console.log(name);

const noOfDirections = 4;
console.log(noOfDirections);

const plant = "Rose";
console.log(plant);

const tree = "coconut";
console.log(tree);

const pillow = 1;
console.log(pillow);

const bikeWheel = 2;
console.log(bikeWheel);

const carBrand = "Rolls Roce";
console.log(carBrand);

const rainbowColor = 7;
console.log(rainbowColor);

const city = "Mysore";
console.log(city);

const city1 = "Bangalore";
console.log(city1);

//named function
function hd() {
    console.log("HD display");
}
hd();

function tv() {
    console.log("TV Remote");
}
tv();

function socket() {
    console.log("Switch Board has socket");
}
socket();

function room() {
    console.log("Class Room");
}
room();

function page() {
    console.log("Book page");
}
page();

function slipper() {
    console.log("size");
}
slipper();

function cotton() {
    console.log("material");
}
cotton();

function box() {
    console.log("stainless");
}
box();

function bag() {
    console.log("bag has zip");
}
bag();

//arrow function
var rose = () => {
    console.log("Rose has thorn");
}
rose();

var key = () => {
    console.log("lock has key");
}
key();

var thread = () => {
    console.log("multiThread");
}
thread();

let train = () => {
    console.log("window seat");
}
train();

let ball = () => {
    console.log("cricket");
}
ball();

let cap = () => {
    console.log("head cap");
}
cap();

let jazz = () => {
    console.log("music type");
}
jazz();

const tea = () => {
    console.log("tea break");
}
tea();

const doll = () => {
    console.log("doll is a thing");
}
doll();

const id = () => {
    console.log("office id");
}
id();

var intel = () => {
    console.log("intel laptop");
}
intel();

const generation = () => {
    console.log("generation gap");
}
generation();


(function () {
    var dance;
    dance = "HipPop";
    console.log(dance)
}());

    (function () {
        var payment;
        payment = "Scanner";
        console.log(payment)
    }());

    (function () {
        var fan;
        fan = "Havells";
        console.log(fan)
    }());

 
    
    var state;
    //var city;


    function locations(city,state){
    console.log("running function");
    console.log("city is :",city,"state is :",state);
    this.city=city;
    this.state=state;
};
locations("Mandya","Kashmir");
console.log("city is :",city,"state is :",state);

//Array operators
var nameOfTheArray=[1,4,3,7,6,5,8];
console.log(nameOfTheArray)
for(let i=0;i<nameOfTheArray.length;i++)
{
    console.log(nameOfTheArray[i]);
}
nameOfTheArray[1]=10;
console.log(nameOfTheArray);

var index=nameOfTheArray.push(60); //added to last index
console.log(index);
console.log(nameOfTheArray);

var element=nameOfTheArray.pop(60);
console.log(element);
console.log(nameOfTheArray);

nameOfTheArray.unshift(50);  //added to 1st index
console.log(nameOfTheArray);

console.log(nameOfTheArray.shift(50));
console.log(nameOfTheArray);

var array=[3,76,98,2,8,23,10,19];
console.log(array);

var newArrr=array.slice(0,6)
console.log(newArrr)

var deletedElement=newArrr.pop();
console.log(deletedElement)
console.log(newArrr)

console.log(newArrr.shift())
console.log(newArrr)

var numbers=[10,50,30,4,3,2,70];
console.log(numbers.splice(1,4,6,7,8,9))
console.log(numbers)

//arithmetic operators
function arithmetic(a,b)
{
    var sum=a+b;
    return sum;
}
var sumOfNumbers=arithmetic(1,2);
console.log(sumOfNumbers)