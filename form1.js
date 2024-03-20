//keyword refName={key:value}

let ref={name:"Charitha",password:"9876",gender:"female",dob:"06/01/1999",address:"Bangalore",phoneNumber:"6456523828"};

// objects String (only considers db) jsonstringfy-->object to object string 
//objectString  JSON.pase()-->object string to object

console.log(ref)//object
var string=JSON.stringify(ref);
console.log(string)//object string

//var parse=JSON.parse(string);
//console.log(parse)

var localStorage=localStorage.setItem("store",string);
//console.log(localStorage)

var local=localStorage.setItem("store",string);
var getData=localStorage.getItem("store");
console.log(getData);

var parse=JSON.parse(getData);// to display only name we use this method
console.log(parse.name);

function functionClick(){
var fName=document.getElementById("fName")
console.log(fName);
}

 //alert("this working form");
 
//  function functionClick(){
//     alert("this working form");
//  }

// function functionClick(){
//     var fName=document.getElementById("fName")
//     console.log(fName.value);                     //to specify input values
//     }
    
     //alert("this working form");

var local1=localStorage.setItem("store",string);
var getData1=localStorage.getItem("store");
console.log(getData1);

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);    
    
//     var fName=document.getElementById("fName");
//      console.log(fName.value);
//     }

function functionClick(){
        var work=registration.Working.value;
         console.log(work);   
        
         var fName=document.getElementById("fName");
          if(fName.value.length>3&& fName.value.length<20)
          {
            console.log("Name is valid");
          }
          else{
            console.log("Name is invalid");
          }
     }
    
     function fnameValidation(){
        var firstName=document.getElementById("fName").value;
        if(firstName.length>3 && firstName.length<20){
            console.log("Name is valid");
        }
        else{
          console.log("Name is invalid"); 
        }
     }