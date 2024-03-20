let firstName;
let lastName;
let passwordField;
let emailField;

let fnameFuncation=()=>{
    let btn=document.getElementById("fname").value;
    console.log(btn);
    var fname=document.getElementById("fname").value;
    console.log(fname);
    if(fname.length>3 && fname.length<20)
    {
    console.log("first name is valid",fname);
    firstName = fname;
    btn.removeAttribute("disabled");
}else{
    document.getElementById("firstNameError").innerHTML = "First name is invalid";
    console.log("first name in invalid",fname);
    btn.setAttribute("disabled","");

}
};

let lnameFuncation = () =>{
    let btn=document.getElementById("lname").value;
    console.log(btn);
    var lname = document.getElementById("lname").value;
    if(lname.length>0 && lname.length<5)
    {
        console.log("last name is Valid",lname);
        lastName=lname;
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("lastNameError").innerHTML = "Last name is invalid";
        console.log("Last name in invalid",lname);
        btn.setAttribute("disabled","");
    
    }
};

let passwordFuncation = () =>{
    let btn=document.getElementById("password").value;
    console.log(btn);
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
    let btn=document.getElementById("email").value;
    console.log(btn);
    var email = document.getElementById("email").value;
    if(email.length>6 && email.length<10)
    {
        console.log("email is Valid",email);
        emailField=email;
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("emailError").innerHTML = "email is invalid";
        console.log("email is invalid",email);
        btn.setAttribute("disabled","");
        
    }
};

let functionOnClick=()=>{
    console.log(firstName,lastName,passwordField,emailField);
    let formField={fname:firstName,lname:lastName,password:passwordField,email:emailField,gender:register.working.value};
    localStorage.setItem("form",JSON.stringify(formField));
};