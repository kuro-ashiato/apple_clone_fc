import ipads from "../data/ipads.js";
import navigations from "../data/navigations.js";

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
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
    headerEl.classList.add("searching");
    stopScroll(); //장바구니
    document.documentElement.classList.add("fixed");
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = (index * 0.2) / headerMenuEls.length + "s";
    });
    searchDelayEls.forEach(function (el, index) {
        el.style.transitionDelay = (index * 0.2) / searchDelayEls.length + "s";
    });
    setTimeout(function () {
        searchInputEl.focus();
    }, 600);
}

function hideSearch() {
    headerEl.classList.remove("searching");
    playScroll(); //장바구니
    document.documentElement.classList.remove("fixed");
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = (index * 0.2) / headerMenuEls.length + "s";
    });
    searchDelayEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = (index * 0.2) / searchDelayEls.length + "s";
    });
    searchDelayEls.reverse();
    searchInputEl.value = "";
}
// search end

// basket-starter remove start
function playScroll() {
    document.documentElement.classList.remove("fixed");
}
function stopScroll() {
    document.documentElement.classList.add("fixed");
}
// basket-starter remove end

// 헤드 메뉴 토글 start
const menuStarterEl = document.querySelector("header .menu-starter");

menuStarterEl.addEventListener("click", function () {
    if (headerEl.classList.contains("menuing")) {
        headerEl.classList.remove("menuing");
        playScroll();
    } else {
        headerEl.classList.add("menuing");
        stopScroll();
    }
});
// 헤드 메뉴 토글 end

// 요소의 가시성 관찰 start
const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("show");
    });
});

const infoEls = document.querySelectorAll(".info");
infoEls.forEach(function (el) {
    io.observe(el);
});
// 요소의 가시성 관찰 end

// 재생 & 일시정지 start
const video = document.querySelector(".stage video");
const playBtn = document.querySelector(".stage .controller--play");
const pauseBtn = document.querySelector(".stage .controller--pause");

playBtn.addEventListener("click", function () {
    video.play();
    playBtn.classList.add("hide");
    pauseBtn.classList.remove("hide");
});

pauseBtn.addEventListener("click", function () {
    video.pause();
    playBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
});
// 재생 & 일시정지 end

// '당신에게 맞는 iPad는?' 렌더링 start
const itemsEl = document.querySelector("section.compare .items");

ipads.forEach(function (ipad) {
    const itemEl = document.createElement("div");

    itemEl.classList.add("item");

    let colorList = "";
    ipad.colors.forEach(function (color) {
        colorList += `<li style="background-color:${color};"></li>`;
    });

    itemEl.innerHTML = /* html */ `
    <div class="thumbnail">
        <img src="${ipad.thumbnail}" alt="${ipad.name}"/>
    </div>
    <ul class="colors">
        ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">￦${ipad.price.toLocaleString("en-US")}부터</p>
    <button class="btn">구입하기</button>
    <a href="${ipad.url}" class="link">더 알아보기</a>
    `;

    itemsEl.append(itemEl);
});
// '당신에게 맞는 iPad는?' 렌더링 end

// footer nav start
const navigationsEl = document.querySelector("footer .navigations");

navigations.forEach(function (nav) {
    const mapEl = document.createElement("div");

    mapEl.classList.add("map");

    let mapList = "";
    nav.maps.forEach(function (map) {
        mapList += /* html */ `
        <li>
            <a href="${map.url}">${map.name}</a>
        </li>
        `;
    });

    mapEl.innerHTML = /* html */ `
    <h3>
        <span class="text">${nav.title}</span>
    </h3>
    <ul>
        ${mapList}
    </ul>
    `;

    navigationsEl.append(mapEl);
});
// footer nav end

// footer this-year start
const thisYearEl = document.querySelector("span.this-year");

thisYearEl.textContent = new Date().getFullYear();
// footer this-year end
