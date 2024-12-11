
//ハンバーガーメニュー
const menu = document.querySelector('#header-menu')
const btn = document.querySelector('#hamburger')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('open')
    if (menu.classList.contains("open")) {
        menu.style.height = menu.scrollHeight + 'px'
    } else {
        menu.style.height = "0"
    }
})

//拡大
const zoom = document.querySelectorAll(".zoom");
const zooming = document.getElementById("zooming");
const zoom1 = document.getElementById("zoom1");

zoom.forEach(function (value) {
    value.addEventListener("click", kakudai);
})

function kakudai(e) {
    zooming.style.display = "flex";
    zoom1.setAttribute("src", e.target.getAttribute("src"));
    zoom1.classList.add("big");
}

zooming.addEventListener("click", modosu);

function modosu() {
    zooming.style.display = "none";
    zoom1.classList.remove("big");
}