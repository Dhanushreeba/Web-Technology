let userName;

let passwordField;


 let btn=document.getElementById("button");
 console.log(btn)

let fnameFunction=()=>{
    let btn=document.getElementById("button");
    console.log(btn)
    var fname=document.getElementById("fname").value;
    console.log(fname);
    if(fname.length>3 && fname.length<9)
    {
    console.log("user name is valid",fname);
    userName = fname;
    btn.removeAttribute("disabled");
}else{
    document.getElementById("fnameError").innerHTML = "user name is invalid";
    console.log("username in invalid",fname);
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
        window.location.href = "regForm.html"; 
    }
};



let functionClick=()=>{
    console.log(firstName,lastName,passwordField)
    let formField={fname:userName,password:passwordField,gender:register.working.value};
    localStorage.setItem("form",JSON.stringify(formField))
}