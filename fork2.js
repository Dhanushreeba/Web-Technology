let firstName;
let lastName;
let passwordField;

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
    if(lname.length>1 && lname.length<5)
    {
        console.log("last name is Valid",lname);
        lastName=lname;
    }else{
        console.log("last name is invalid",lname);
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
    }else{
        console.log("password is invalid",password);
    }
};

let functionClick=()=>{
    console.log(firstName,lastName,passwordField)
    let formField={fname:firstName,lname:lastName,password:passwordField,gender:register.working.value};
    localStorage.setItem("form",JSON.stringify(formField))
}
