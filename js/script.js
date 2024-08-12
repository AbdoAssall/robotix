// show-menu

const showMenu = (toggleId, listId) => {
  var toggle = document.getElementById(toggleId),
    navb = document.getElementById(listId)
    // navlink = document.getElementsByClassName("scroll-link")

  if (toggle && navb) {
    toggle.addEventListener("click", () => {
      navb.classList.toggle("show");
      toggle.classList.toggle("show");
    })
  }
};
showMenu('toggle-btn', 'list');

$(".scroll-link").click(function (){
  $(".list").removeClass("show");
})
// show-menu
// Scroll Header
window.onscroll = function() {scrollHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop

function scrollHeader() {
  if (window.pageYOffset > sticky){
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Scroll Header

// Get the container element
var x = document.getElementById("dots");

// Get all buttons with class="btn" inside the container
var btns = x.getElementsByClassName("dots-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("circle");
    current[0].className = current[0].className.replace(" circle", "");
    this.className += " circle";
  });
}
console.log(x)