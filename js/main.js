// basket start
const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", function (event) {
    event.stopPropagation();
    if (basketEl.classList.contains("show")) {
        basketEl.classList.remove("show");
    } else {
        basketEl.classList.add("show");
    }
});
basketEl.addEventListener("click", function (event) {
    event.stopPropagation();
});

window.addEventListener("click", function () {
    basketEl.classList.remove("show");
});

function showBasket() {
    basketEl.classList.add("show");
}
function hideBasket() {
    basketEl.classList.remove("show");
}
// basket end
