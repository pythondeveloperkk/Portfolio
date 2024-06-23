// header scroll

let nav = document.querySelector(".navbar ")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
    nav.classList.add("header-scrolled ")
    }
    else{
        nav.classList.remove("header-scrolled");
    }
 
}

//navhide

let navbar = document.querySelectorAll(".nav-links")
let navCollapse = document.querySelector(".navbar-colapse");
navbar.forEach(function(a)){
    a.addEventListener("click", function(a) {
        navCollapse.classList.remove("show");
    }
  
}
 