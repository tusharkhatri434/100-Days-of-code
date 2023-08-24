const menu = document.querySelector('.menu');
const menuImg = document.querySelector('.menu-img');
const list = document.querySelector('.nav-items');
let count = 1;
[menu,list].forEach(element => {
    element.addEventListener("click",function(){ 
    list.classList.toggle("visible-list");
    count = !count;
    if (count == 1) {
      menuImg.src = "./assets/Img/bars-solid.svg";
    } else {
      menuImg.src = "./assets/Img/xmark-solid.svg";
    }

    })
    
})
 