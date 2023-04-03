var r = document.querySelector(':root');

function darkMode() {
    r.style.setProperty('--light-green', 'rgb(0, 80, 0)');
    r.style.setProperty('--medium-green', 'rgb(0, 100, 0)');
    r.style.setProperty('--dark-green', 'rgb(220, 255, 220)');
    r.style.setProperty('--link-green', 'rgb(0, 200, 0)');
    r.style.setProperty('--bg-light-green', 'rgb(0, 150, 0)');
    r.style.setProperty('--bg-dark-green', 'rgb(0, 90, 0)');
    document.querySelector(".menu-opener").src = 'images/menu-light.png';
}

function lightMode() {
    r.style.setProperty('--light-green', 'rgb(220, 255, 220)');
    r.style.setProperty('--medium-green', 'rgb(100, 255, 200)');
    r.style.setProperty('--dark-green', 'rgb(0, 80, 0)');
    r.style.setProperty('--link-green', 'rgb(0, 200, 0)');
    r.style.setProperty('--bg-light-green', 'rgb(150, 255, 200)');
    r.style.setProperty('--bg-dark-green', 'rgb(0, 255, 0)');
    document.querySelector(".menu-opener").src = 'images/menu.png';
}

window.onload = function(){
    document.querySelector(".menu-opener").addEventListener("click", function(){
        if(document.querySelector(".menu-mobile-ex").style.display == 'block') {
            document.querySelector(".menu-mobile-ex").style.display = 'none';            
        } else {
            document.querySelector(".menu-mobile-ex").style.display = 'block';
        }
    });
};

/* function dog01o() {
    document.querySelector("#dog01").style.display = "block";
}
function dog01c() {
    document.querySelector("#dog01").style.display = "none";
} */