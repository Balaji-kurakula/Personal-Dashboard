



//function togglemenu(){
/*    if(side-bar.style.display == "none"){
        side-bar.style.display == "inline";
    }
    else{
        side-bar.display == "none";
    }
}*/

menubar = document.getElementsByClassName("menu-icon")[0];

menubar.onclick = function(){
    sidebar = document.getElementsByClassName("side-bar")[0];
    sidebar.classList.toggle("active");
}

      