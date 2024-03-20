
var ref;
ref=123;
console.log(ref);

//sel-invoking function
(function(){

    var ref=50;
    console.log(ref);
}());
//named function
function javascript(){
    console.log("Named function");
}
//invoking
javascript();

//arrow function
var arrowFunction=()=>{
    console.log("this is arrow function");
}
arrowFunction();
