
let estadoMenu = false;

var menu = function(){
    
    var navbar = document.getElementById("navbar");
    var navbar_buttons = document.getElementById("navbar_buttons");
    var navbar_logoContainer = document.getElementById("navbar_logoContainer");
    var navbar_items = document.getElementById("navbar_items");
    var navbar_toggle_close = document.getElementById("navbar_toggle_close");
    var navbar_toggle_open = document.getElementById("navbar_toggle_open");
    estadoMenu = !estadoMenu;

    if (estadoMenu == true) {
        navbar.style.flexFlow = "column-reverse";
        navbar_items.style.display = "flex";
        navbar_items.style.flexDirection = "row wrap"
        navbar_logoContainer.style.display = "none";
        navbar_buttons.style.display = "block";
        navbar_toggle_open.style.display = "none";
        navbar_toggle_close.style.display = "block";
        navbar_toggle_close.style.margin = "1rem";
    } else {
        navbar.style.flexFlow = "row wrap";
        navbar_items.style.display = "none";
        navbar_logoContainer.style.display = "block";
        navbar_buttons.style.display = "none";
        navbar_toggle_open.style.display = "block";
        navbar_toggle_close.style.display = "none";
    }
}