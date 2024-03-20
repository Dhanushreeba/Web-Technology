// async function asyncFunction(){
//     return "Hello async Function";
// }
// let promise=asyncFunction();
// console.log(promise);
// promise.then((result) =>
//  console.log(result)
// );

// let p=new promise((resolve,reject) => {
//     resolve("hello promises")
// });
// async function asyncFunction(){
//     return p;
// }
// let promise=asyncFunction();
// console.log(promise);
// promise.then((result) =>console.log(result));

// let p=new promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve("hello promises");
//     }, 10000);
// });

// async function asyncFunction(){
//     return fetch ("https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=85bdc3279976a32366473f93bef1784b");
// }
// let getWetherData=asyncFunction();
// console.log(getWetherData);

//promise.then((result) =>console.log(result));
//console.log("Hello before promise")


//async+await
// let p=new promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve("hello promises");
//     }, 10000);
// });
// async function asyncFunction(){
//     return await p;
// }
// let promise=asyncFunction();
// console.log(promise);
// promise.then((result) =>console.log(result));
// console.log("Hello before promise")

// let fnameValidate=() =>{
//     let firstName=document.getElementById("fname").value;
//     if(firstName.length >3 && firstName.length <=20){
//         document.getElementById("fnameError").innerHTML=
//         "<span style='color:green'> name is valid</span>";
//     }
//     else{
//         document.getElementById("fnameError").innerHTML =
//         "<span style='color:red'>name is invalid</span>";
//     }
// };

// async function getWetherData(){
//     let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=85bdc3279976a32366473f93bef1784b");
//     return response;
// }
// let gettingData=getWetherData();
// //console.log(gettingData)
// gettingData.then((result)=>console.log(result.json()));

// async function getWetherData(){
//     let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=85bdc3279976a32366473f93bef1784b");
//     return response;
// }
// let gettingData=getWetherData();
// //console.log(gettingData)
// let convertingJSON=gettingData.then((result)=>result.json());
// console.log(convertingJSON)
// convertingJSON.then(res=>console.log(res));

async function getWetherData(){
    let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=85bdc3279976a32366473f93bef1784b");
    return response;
}
let gettingData=getWetherData();
//console.log(gettingData)
let convertingJSON=gettingData.then((result)=>result.json());
console.log(convertingJSON)
let finalData;
convertingJSON.then(res=>{console.log(res.main.temp)
    document.getElementById("temp").innerHTML=res.main.temp;
    console.log(res.wind.speed)
});
//console.log(finalData)