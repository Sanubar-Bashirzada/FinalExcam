// const writeOneInput=document.getElementById("writeOneInput");
// const writeTwoInput=document.getElementById("writeTwoInput");
const crtBtn=document.getElementById("crtBtn");
crtBtn.addEventListener("click",function(){
    let input1=document.querySelectorAll(".writeOneInput").value;
    let input2=document.querySelectorAll(".writeTwoInput").value;
    let input3=document.querySelectorAll(".write").value;
     let obj={
        writeOne:input1,
        writeTwo:input2,
        img:input3
     }
    fetch("  http://localhost:3000/imtahan",{
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
   
})
.then((resp)=>resp.json())
.then(data=>{
    console.log(data);
})


})
