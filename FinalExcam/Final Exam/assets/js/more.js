const cardMore=document.getElementById("cardMore");
fetch("  http://localhost:3000/imtahan")
.then((resp)=>resp.json())
.then(data=> {
    data.forEach((element,i) => {

        if(i<data.length) {
            let card=document.createElement("div");
            let img=document.createElement("img")
            let writeDiv=document.createElement("div");
            let p1=document.createElement("p");
            let p2=document.createElement("p"); 
            writeDiv.append(p1,p2)
            card.append(img,writeDiv) ;
            cardMore.append(card);
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