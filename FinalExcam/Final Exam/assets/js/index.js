// navbar js
const bar=document.getElementById("bar")
const addMenu=document.getElementById("addMenu")
bar.addEventListener("click",function(){
    addMenu.classList.toggle("barMenuJs");
})

//js da kart yaratmaq apden datalari cekmek
const cardBoxs=document.getElementById("cardBoxs");
fetch("  http://localhost:3000/imtahan")
.then((resp)=>resp.json())
.then(data=> {
    data.forEach((element,i) => {

        if(i<3) {
            let card=document.createElement("div");
            let img=document.createElement("img")
            let writeDiv=document.createElement("div");
            let p1=document.createElement("p");
            let p2=document.createElement("p"); 
            writeDiv.append(p1,p2)
            card.append(img,writeDiv) ;
            cardBoxs.append(card);
            card.classList.add("cardBox");
            img.classList.add("imgJsAdd");
            writeDiv.classList.add("writeDiv");
            p1.classList.add("titleWrite");
            p2.classList.add("contentWrite")


            img.src=element.img;
            p1.innerHTML=element.writeOne;
            p2.innerHTML=element.writeTwo;

        }
        
    });
})


//post etmek

const create=document.getElementById("create");
const post=document.createElement("a");
post.href="post.html";
post.target="_blank";
post.innerText="Create";
create.append(post)



//delete 
const dlt=document.getElementById("delete");
crtBtn.addEventListener("click",function(){
    fetch("  http://localhost:3000/imtahan",{
        method: "DELETE",
     
    })
    .then((resp)=>resp.json())
    .then(data=>{
        console.log(data);
    })
})
   

//update
const uptade=document.getElementById("uptade");
crtBtn.addEventListener("click",function(){
    fetch("  http://localhost:3000/imtahan",{
        method: "PUT",
        body: JSON.stringify({
            img: "Sanubar",
        writeOne: "Bashirzade" ,
        writeTwo: "AGE"
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
     
    })
    .then((resp)=>resp.json())
    .then(data=>{
        console.log(data);
    })
})
   

//loadmore
const loadMor=document.getElementById("loadMore");
const load=document.createElement("a");
load.innerText="LoadMore";
load.href="more.html";
load.target="_blank";

loadMor.append(load)



const inputSearch=document.getElementById("inputSearch");
const cardwrites=document.querySelectorAll(".cardwrites");
 
  inputSearch.addEventListener("keyup", function () {

    cardwrites.forEach((element) => {
   
      if (
        element.querySelector("h3").innerText.toLowerCase().includes(inputSearch.value.toLowerCase())
      ) {
        element.style.display = "block";

      } else {
        element.style.display = "none";
    }
    
    });
});

