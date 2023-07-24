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

// search start
const headerEl = document.querySelector("header");
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
    headerEl.classList.add("searching");
}
function hideSearch() {
    headerEl.classList.remove("searching");
}
// search end
