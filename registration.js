let firstName;
let lastName;
let passwordField;
let emailField;

 let btn=document.getElementById("button");
 console.log(btn)

let fnameFunction=()=>{
    let btn=document.getElementById("button");
    console.log(btn)
    var fname=document.getElementById("fname").value;
    console.log(fname);
    if(fname.length>3 && fname.length<9)
    {
    console.log("first name is valid",fname);
    firstName = fname;
    btn.removeAttribute("disabled");
}else{
    document.getElementById("fnameError").innerHTML = "first name is invalid";
    console.log("firstname in invalid",fname);
    btn.setAttribute("disabled","");
}
};

let lnameFunction = () =>{
    let btn=document.getElementById("button");
    console.log(btn)
    var lname = document.getElementById("lname").value;
    if(lname.length>1 && lname.length<5)
    {
        console.log("last name is Valid",lname);
        lastName=lname;
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("lnameError").innerHTML = "last name is invalid";
        console.log("last name is invalid",lname);
        btn.setAttribute("disabled","");
    }
};

let passwordFunction = () =>{
    let btn=document.getElementById("button");
    console.log(btn)
    var password = document.getElementById("password").value;
    if(password.length>6 && password.length<10)
    {
        console.log("password is Valid",password);
        passwordField=password;
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("passwordError").innerHTML = "password is invalid";
        console.log("password is invalid",password);
        btn.setAttribute("disabled","");
    }
};

let emailFunction = () =>{
    let btn=document.getElementById("button");
    console.log(btn)
    var email = document.getElementById("emailError").value;
    if(password.length>6 && password.length<10)
    {
        console.log("email is Valid",email);
        emailField=email;
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("emailError").innerHTML = "email is invalid";
        console.log("email is invalid",email);
        btn.setAttribute("disabled","");
        window.location.href = "L1.html"; 
    }
};

let functionClick=()=>{
    console.log(firstName,lastName,passwordField)
    let formField={fname:firstName,lname:lastName,password:passwordField,email:emailField,gender:register.working.value};
    localStorage.setItem("form",JSON.stringify(formField))
}