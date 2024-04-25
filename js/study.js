/* 90度回転ボタン
------------------------------------------------------------ */
const circle = document.querySelector("#circle");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

let rotate = 0;

upBtn.addEventListener("click", () => {
    rotate -= 90;
    circle.style.transform = `rotate(${rotate}deg)`;
});

downBtn.addEventListener("click", () => {
    rotate += 90;
    circle.style.transform = `rotate(${rotate}deg)`;
});

/* カウントダウン
------------------------------------------------------------ */
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function countDown() {
    // 現在の時刻をnowに代入
    const now = new Date();

    // 明日の日付を取得
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // 明日の時間を計算する
    const timeDiff = tomorrow.getTime() - now.getTime();

    // ミリ秒から直す
    const calHour = Math.floor(timeDiff / 1000 / 60 / 60);
    const calMin = Math.floor(timeDiff / 1000 / 60) % 60;
    const calSec = Math.floor(timeDiff / 1000) % 60;

    // 計算結果おwHTMLにわたす
    hour.innerHTML = String(calHour).padStart(2, '0');
    min.innerHTML = String(calMin).padStart(2, '0');
    sec.innerHTML = String(calSec).padStart(2, '0');
}
countDown();
setInterval(countDown, 1000);

/* モーダルウィンドウ
------------------------------------------------------------ */
const modalOpen = document.querySelector(".modal__open");
const bg = document.querySelector(".modal__bg");
const container = document.querySelector(".modal__container");
const modalClose = document.querySelector(".modal__close");

modalOpen.addEventListener("click", () => {
    container.classList.add("active");
    bg.classList.add("active");
});

modalClose.addEventListener("click", () => {
    container.classList.remove("active");
    bg.classList.remove("active");
});

bg.addEventListener("click", () => {
    container.classList.remove("active");
    bg.classList.remove("active");
});

/* スライダー
------------------------------------------------------------ */
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const slideImg = document.querySelector(".slide-img");
const prev = document.querySelector(".prev");
const page = document.querySelector(".page");
const next = document.querySelector(".next");
let current = 0;

page.textContent = `1/${images.length}`;

next.addEventListener("click", () => {
    if (current + 1 < images.length) {
        current++;
        slideImg.src = `./images/${images[current]}`;
    } else {
        current = 0;
        slideImg.src = `./images/${images[current]}`;
    }
    page.textContent = `${current + 1}/${images.length}`;
});

prev.addEventListener("click", () => {
    if (current > 0) {
        current--;
        slideImg.src = `./images/${images[current]}`;
    } else {
        current = images.length - 1;
        slideImg.src = `./images/${images[current]}`;
    }
    page.textContent = `${current + 1}/${images.length}`;
});

/* サムネイルが切り替わる
------------------------------------------------------------ */
const main = document.querySelector(".thumb-main");
const thumbnails = document.querySelectorAll(".thumb-img");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        let src = thumbnail.getAttribute("src");
        main.src = src;
    });
});

const img = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

let changePic = document.querySelector(".changePic");
let count = -1;

function picChange() {
    count++;
    if (count == img.length) count = 0;
    changePic.src = `./images/${img[count]}`;
    setTimeout(picChange, 4000);
};
picChange();

const bgImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
let changeImg = document.querySelector(".box");
let counter = -1;

function imgChange() {
    counter++;
    if (counter == bgImg.length) counter = 0;
    changeImg.style.background = `url('../images/${bgImg[counter]}')`;
    setTimeout(imgChange, 3000);
}
imgChange();