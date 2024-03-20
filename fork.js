let ref={fName:"Sanjana",lName:"Aradhya",password:"45483",gender:"female",dob:"18/02/2000",address:"Bangalore",phoneNumber:"9578456704"};

console.log(ref);
var string=JSON.stringify(ref);
console.log(string);

var localStorage=localStorage.setItem("store",string);

var local=localStorage.setItem("Store",string);
var getData=localStorage.getItem("store");
console.log(getData);

var parse=JSON.parse(getData);
console.log(parse.fName);

function functionClick(){
    var fName=document.getElementById("fName")
    console.log(fName);
}

function functionClick(){
    var lName=document.getElementById("lName")
    console.log(lName);
}
//alert("this is working");

var local1=localStorage.setItem("Store",string);
var getData1=localStorage.getItem("store");
console.log(getData1);

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

    var fName=document.getElementById("fName");
    if(fName.value.length>3&& fName.value.length<20){

        console.log("Name is valid",ref);
        firstName=ref;
       // btn.removeAttribute("disabled");
    }
    else{
        // document.getElementById("fNameError").innerHTML="First name is Invalid";
        console.log("Name is invalid");
        btn.setAttribute("disabled","");
    }
}

function fnameValidation(){
    var firstName=document.getElementById("fName").value;
    if(firstName.length>3&& firstName.length<20){

        console.log("Name is valid");
    }
    else{
        console.log("Name is invalid");
    }
}

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

    var lName=document.getElementById("lName");
    if(lName.value.length>3&& lName.value.length<20){

        console.log("Name is valid");
    }
    else{

        console.log("Name is invalid");
    }
}

function lnameValidation(){
    var lastName=document.getElementById("lName").value;
    if(lastName.length>3&& lastName.length<20){

        console.log("Name is valid");
    }
    else{
        console.log("Name is invalid");
    }
}

function functionClick(){
     var work=registration.Working.value;
      console.log(work);

     var address=document.getElementById("address");
     if(address.value.length>3&& address.value.length<20){

         console.log("address is valid");
     }
     else{

         console.log("password is invalid");
     }
 }


function passwordValidation(){
    var password=document.getElementById("password").value;
    if(password.length>3&& password.length<20){

        console.log("password is valid");
    }
    else{
        console.log("password is invalid");
    }
}

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

   var gender=document.getElementById("gender");
   if(gender.value.length>3&& gender.value.length<20){

       console.log("gender is valid");
   }
   else{

       console.log("gender is invalid");
   }
}

function genderValidation(){
    var gender=document.getElementById("gender").value;
    if(gender.length>3&& gender.length<20){

        console.log("gender is valid");
    }
    else{
        console.log("gender is invalid");
    }
}

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

   var dob=document.getElementById("dob");
   if(dob.value.length>3&& dob.value.length<20){

       console.log("DOB is valid");
   }
   else{

       console.log("DOB is invalid");
   }
}

function dobValidation(){
    var dob=document.getElementById("dob").value;
    if(dob.length>3&& dob.length<20){

        console.log("DOB is valid");
    }
    else{
        console.log("DOB is invalid");
    }
}

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

   var address=document.getElementById("address");
   if(address.value.length>3&& address.value.length<20){

       console.log("address is valid");
   }
   else{

       console.log("address is invalid");
   }
}

function addressValidation(){
    var address=document.getElementById("address").value;
    if(address.length>3&& address.length<20){

        console.log("address is valid");
    }
    else{
        console.log("address is invalid");
    }
}

function functionClick(){
    var work=registration.Working.value;
    console.log(work);

   var phoneNumber=document.getElementById("phoneNumber");
   if(phoneNumber.value.length>3&& phoneNumber.value.length<20){

       console.log("phoneNumber is valid");
   }
   else{

       console.log("phoneNumber is invalid");
   }
}

function phoneNumberValidation(){
    var phoneNumber=document.getElementById("phoneNumber").value;
    if(phoneNumber.length>3&& phoneNumber.length<20){

        console.log("phoneNumber is valid");
    }
    else{
        console.log("phoneNumber is invalid");
    }
}


// let ref1={fName:"Charitha",lName:"S",password:"4544",gender:"female",dob:"06/01/2000",address:"Bangalore",phoneNumber:"76438024763"};

// console.log(ref1);
// var string=JSON.stringify(ref1);
// console.log(string);

// var localStorage=localStorage.setItem("store",string);

// var local=localStorage.setItem("Store",string);
// var getData=localStorage.getItem("store");
// console.log(getData);

// var parse=JSON.parse(getData);
// console.log(parse.fName);

// function functionClick(){
//     var fName=document.getElementById("fName")
//     console.log(fName);
// }

// function functionClick(){
//     var lName=document.getElementById("lName")
//     console.log(lName);
// }
// //alert("this is working");

// var local1=localStorage.setItem("Store",string);
// var getData1=localStorage.getItem("store");
// console.log(getData1);

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//     var fName=document.getElementById("fName");
//     if(fName.value.length>3&& fName.value.length<20){

//         console.log("Name is valid");
//     }
//     else{
//         // document.getElementById("fNameError").innerHTML="First name is Invalid";
//         console.log("Name is invalid");
//     }
// }

// function fnameValidation(){
//     var firstName=document.getElementById("fName").value;
//     if(firstName.length>3&& firstName.length<20){

//         console.log("Name is valid");
//     }
//     else{
//         console.log("Name is invalid");
//     }
// }

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//     var lName=document.getElementById("lName");
//     if(lName.value.length>3&& lName.value.length<20){

//         console.log("Name is valid");
//     }
//     else{

//         console.log("Name is invalid");
//     }
// }

// function lnameValidation(){
//     var lastName=document.getElementById("lName").value;
//     if(lastName.length>3&& lastName.length<20){

//         console.log("Name is valid");
//     }
//     else{
//         console.log("Name is invalid");
//     }
// }

// function functionClick(){
//      var work=registration.Working.value;
//       console.log(work);

//      var address=document.getElementById("address");
//      if(address.value.length>3&& address.value.length<20){

//          console.log("address is valid");
//      }
//      else{

//          console.log("password is invalid");
//      }
//  }


// function passwordValidation(){
//     var password=document.getElementById("password").value;
//     if(password.length>3&& password.length<20){

//         console.log("password is valid");
//     }
//     else{
//         console.log("password is invalid");
//     }
// }

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//    var gender=document.getElementById("gender");
//    if(gender.value.length>3&& gender.value.length<20){

//        console.log("gender is valid");
//    }
//    else{

//        console.log("gender is invalid");
//    }
// }

// function genderValidation(){
//     var gender=document.getElementById("gender").value;
//     if(gender.length>3&& gender.length<20){

//         console.log("gender is valid");
//     }
//     else{
//         console.log("gender is invalid");
//     }
// }

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//    var dob=document.getElementById("dob");
//    if(dob.value.length>3&& dob.value.length<20){

//        console.log("DOB is valid");
//    }
//    else{

//        console.log("DOB is invalid");
//    }
// }

// function dobValidation(){
//     var dob=document.getElementById("dob").value;
//     if(dob.length>3&& dob.length<20){

//         console.log("DOB is valid");
//     }
//     else{
//         console.log("DOB is invalid");
//     }
// }

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//    var address=document.getElementById("address");
//    if(address.value.length>3&& address.value.length<20){

//        console.log("address is valid");
//    }
//    else{

//        console.log("address is invalid");
//    }
// }

// function addressValidation(){
//     var address=document.getElementById("address").value;
//     if(address.length>3&& address.length<20){

//         console.log("address is valid");
//     }
//     else{
//         console.log("address is invalid");
//     }
// }

// function functionClick(){
//     var work=registration.Working.value;
//     console.log(work);

//    var phoneNumber=document.getElementById("phoneNumber");
//    if(phoneNumber.value.length>3&& phoneNumber.value.length<20){

//        console.log("phoneNumber is valid");
//    }
//    else{

//        console.log("phoneNumber is invalid");
//    }
// }

// function phoneNumberValidation(){
//     var phoneNumber=document.getElementById("phoneNumber").value;
//     if(phoneNumber.length>3&& phoneNumber.length<20){

//         console.log("phoneNumber is valid");
//     }
//     else{
//         console.log("phoneNumber is invalid");
//     }
// }


