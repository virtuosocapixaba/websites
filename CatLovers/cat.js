/* DARK MODE */

function darkMode() {
    const root = document.querySelector(":root");
    root.classList.toggle("dark-mode");
}

window.onload = function() {
    /* CAROUSEL */    
    document.querySelectorAll(".carousel").forEach((carousel) => {
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonsHtml = Array.from(items, () => {
            return `<span class="carousel__button"></span>`;
        });

        carousel.insertAdjacentHTML(
            "beforeend",
            `
                <div class="carousel__nav">
                    ${buttonsHtml.join("")}
                </div>
            `
        );

        const buttons = carousel.querySelectorAll(".carousel__button");

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove("carousel__item--selected")
            );
            buttons.forEach((button) =>
                button.classList.remove("carousel__button--selected")
            );

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
            });
        });

        // Select the first item on page load
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
    });

    /* MENU MOBILE */    
    document.querySelector(".menu-opener").addEventListener("click", function(){
        if(document.querySelector(".menu-mobile-ex").style.display == 'block') {
            document.querySelector(".menu-mobile-ex").style.display = 'none';            
        } else {
            document.querySelector(".menu-mobile-ex").style.display = 'block';
        }
    });
    
    /* var modal = document.querySelector(".modal");
    var openModal = document.querySelector(".picture");
    var modalPic = document.querySelector(".picture img");
    openModal.onclick = function() {
        modal.style.display = "block";
        modalPic.src = this.src;
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    } */

    var modal = document.querySelector(".modal");
    var openModal = document.querySelector(".picture");
    openModal.onclick = function() {
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}

