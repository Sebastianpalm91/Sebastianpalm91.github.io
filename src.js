//Menu cross move
//Menu Script for all device
var wrapperMenu = document.querySelector('.wrapper-menu');
var displayMenu = document.querySelector('.display_menu');
let scrollEvent = 0;

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  displayMenu.classList.toggle('display_menu_open');
});

const scripts = {
    desktop : ['desktop.js'],
    mobile : ["mobile.js"]
}

if (window.matchMedia("(max-width: 414px)").matches) {
  for (let i = 0; i < scripts.mobile.length; i++) {
      let scriptEle = document.createElement("script");
      scriptEle.setAttribute("src", scripts.mobile[i]);
      document.body.appendChild(scriptEle);
      scriptEle = null;
  }
}
else {
    for (let i = 0; i < scripts.desktop.length; i++) {
        let scriptEle = document.createElement("script");
        scriptEle.setAttribute("src", scripts.desktop[i]);
        document.body.appendChild(scriptEle);
        scriptEle = null;
    }
}
