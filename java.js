// Scrolling To Top
let iconScroll = document.querySelector(".scrollup");
window.onscroll = function(){
    if (window.scrollY >= 600) {
        iconScroll.style.display = "initial";
    } else {
        iconScroll.style.display = "none";
    };
};
iconScroll.onclick = function (){
    window.scrollTo ({
        top:0,
        behavior:"smooth",
    });
};
// Dark Mood
let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let favoritIcon = document.querySelectorAll(".icon");
let favoritList = document.querySelector("#favorite-list");
menu.onclick = function(){
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
    favoritIcon[0].classList.remove("open");
    favoritIcon[1].classList.remove("open");
    favoritList.classList.remove("open");
}
favoritIcon[0].onclick = function(){
    this.classList.toggle("open");
    favoritList.classList.toggle("open");
    menu.classList.remove("active");
    navbar.classList.remove("active");
}
favoritIcon.forEach((ele)=>{
    ele.onclick = function(){
        this.classList.toggle("open");
        favoritList.classList.toggle("open");
        menu.classList.remove("active");
        navbar.classList.remove("active");
    }
});
let sunMoon = document.querySelectorAll(".icon-dark-light");
let white = document.querySelectorAll(".white");
let black = document.querySelectorAll(".black");
let gre = document.querySelectorAll(".gre");
let title = document.querySelectorAll(".big-title");
sunMoon.forEach((ele)=>{
    ele.onclick = function(){
        this.classList.toggle("fa-sun");
        this.classList.toggle("fa-moon");
        white.forEach(ele=>{
            ele.classList.toggle("ajoutwhite")
        });
        black.forEach((ele)=>{
            ele.classList.toggle("ajoutblack");
        });
        gre.forEach((ele)=>{
            ele.classList.toggle("ajoutgre");
        });
        title.forEach((ele)=>{
            ele.classList.toggle("ajoutwhite");
        });
    }
});

let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow", window.scrollY > 50);
});

let landinPage = document.querySelector(".landing");
let imgArray = ["landing.jpg","landing2.jpg","landing3.jpg","landing4.jpg"];
setInterval(()=> {
    let randomNumber = Math.floor(Math.random()*imgArray.length);
    landinPage.style.backgroundImage = 'url("Images/'+imgArray[randomNumber]+'")';
},3000);
let btn = document.querySelector('.sup-none');
let none = document.querySelectorAll('.nonee');
let pizza = document.querySelectorAll('.pizza');
let juice = document.querySelectorAll('.juice');
let burger = document.querySelectorAll('.burger');
let chicken = document.querySelectorAll('.chicken');
let affPizza = document.querySelector('.aff-pizza');
let affBurger = document.querySelector('.aff-burger');
let affAll = document.querySelector('.all');
let affJuice = document.querySelector('.aff-juice');
let affChicken = document.querySelector('.aff-chicken');
let foods = document.querySelectorAll('.food');
let allLi = document.querySelectorAll(".list-foods li");

btn.onclick = function(){
    none.forEach((ele)=>{
        ele.classList.toggle("none");
    });
    if (btn.textContent==="See More") {
        btn.textContent="See Less";
    } else {
        btn.textContent = "See More";
    };
};

affPizza.onclick = function(){
    allLi.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    foods.forEach(function(ele){
        ele.classList.add("none");
    });
    pizza.forEach(function(ele){
        ele.classList.remove("none");
    });
    btn.classList.add("none");
};
affChicken.onclick = function(){
    allLi.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    foods.forEach(function(ele){
        ele.classList.add("none");
    });
    chicken.forEach(function(ele){
        ele.classList.remove("none");
    });
    btn.classList.add("none");
};
affBurger.onclick = function(){
    allLi.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    foods.forEach(function(ele){
        ele.classList.add("none");
    });
    burger.forEach(function(ele){
        ele.classList.remove("none");
    });
    btn.classList.add("none");
};
affJuice.onclick = function(){
    allLi.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    foods.forEach(function(ele){
        ele.classList.add("none");
    });
    juice.forEach(function(ele){
        ele.classList.remove("none");
    });
    btn.classList.add("none");
};
affAll.onclick = function(){
    allLi.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    foods.forEach(function(ele){
        ele.classList.remove("none");
    });
    none.forEach(function(ele){
        ele.classList.add("none");
    });
    btn.classList.remove("none");
};

// Start Buy
let reset1 = document.querySelector(".reset");
let inputs = document.querySelectorAll(".buy .info input");
reset1.onclick = function(){
    inputs.forEach((ele)=>{
        ele.value = '';
    })
}
let reset2 = document.querySelector(".reset-1");
let inputsOrder = document.querySelectorAll(".buy .order input");
let allSelect = document.querySelectorAll("select");
reset2.onclick = function(){
    inputsOrder.forEach((ele)=>{
        ele.value = '';
    });
    allSelect.forEach((ele)=>{
        ele.value = "0";
    });
};

// Start Rate

let stars = document.querySelectorAll(".rate .icons i");
stars[0].onclick =()=>{
    stars.forEach((ele)=>{
        ele.classList.add("fa-regular");
        ele.classList.remove("fa-solid");
        ele.classList.remove("gold")
    });
    stars[0].classList.toggle("fa-regular");
    stars[0].classList.toggle("fa-solid");
    stars[0].classList.toggle("gold");
};
stars[1].onclick =()=>{
    stars.forEach((ele)=>{
        ele.classList.add("fa-regular");
        ele.classList.remove("fa-solid");
        ele.classList.remove("gold")
    });
    for (let i=0;i<=1;i++){
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("gold")
    };
};
stars[2].onclick =()=>{
    stars.forEach((ele)=>{
        ele.classList.add("fa-regular");
        ele.classList.remove("fa-solid");
        ele.classList.remove("gold")
    });
    for (let i=0;i<=2;i++){
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("gold")
    };
};
stars[3].onclick =()=>{
    stars.forEach((ele)=>{
        ele.classList.add("fa-regular");
        ele.classList.remove("fa-solid");
        ele.classList.remove("gold")
    });
    for (let i=0;i<=3;i++){
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("gold")
    };
};
stars[4].onclick =()=>{
    stars.forEach((ele)=>{
        ele.classList.add("fa-regular");
        ele.classList.remove("fa-solid");
        ele.classList.remove("gold")
    });
    for (let i=0;i<=4;i++){
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("gold")
    };
};

