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