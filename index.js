



//function togglemenu(){
/*    if(side-bar.style.display == "none"){
        side-bar.style.display == "inline";
    }
    else{
        side-bar.display == "none";
    }
}*/

/*menubar = document.getElementsByClassName(".menu-icon");

menubar.onclick = function(){
    sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("active");
}*/

const sidebar = document.querySelector(".side-bar"),
      menubtns = document.getElementsByClassName(".menu-icon"),
      menubtns.forEach(() => {
        sidebar.addEventListener("click", () => {

        })
      });
      