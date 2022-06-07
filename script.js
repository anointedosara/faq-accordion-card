let div4 = document.getElementsByClassName("div4");
for (let i = 0; i < div4.length; i++) {
    div4[i].addEventListener("click", function() {
        const shows = document.getElementsByClassName("show")
        const colors = document.getElementsByClassName("color")
        const rotate = document.getElementsByClassName("rotate")
        for (let i = 0; i < shows.length; i++) {
            shows[i].classList.remove("show")
            colors[i].classList.remove("color")
            rotate[i].classList.remove("rotate")
        }
        div4[i].querySelector(`.hide`).classList.add("show")
        div4[i].querySelector(`.p2`).classList.add("color")
        div4[i].querySelector(`.img3`).classList.add("rotate")
    })
}