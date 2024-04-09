const open = document.querySelector(".modal-open");
const bg = document.querySelector(".modal-bg");
const container = document.querySelector(".modal-container");
const close = document.querySelector(".modal-close");
const designPicArea = document.querySelectorAll(".design-pic-area");
const codePicArea = document.querySelectorAll(".code-pic-area");

open.addEventListener('click', () => {
    container.classList.add('active');
    bg.classList.add('active');
    designPicArea[0].classList.remove('design-pic-area');
    designPicArea[1].classList.remove('design-pic-area');
});

close.addEventListener('click', () => {
    container.classList.remove('active');
    bg.classList.remove('active');
    designPicArea[0].classList.add('design-pic-area');
    designPicArea[1].classList.add('design-pic-area');
});

bg.addEventListener('click', () => {
    container.classList.remove('active');
    bg.classList.remove('active');
    designPicArea[0].classList.add('design-pic-area');
    designPicArea[1].classList.add('design-pic-area');
});

const designOpen = document.querySelector(".design-modal-open");
const designBg = document.querySelector(".design-modal-bg");
const designContainer = document.querySelector(".design-modal-container");
const designClose = document.querySelector(".design-modal-close");

designOpen.addEventListener('click', () => {
    designContainer.classList.add('active');
    designBg.classList.add('active');
    codePicArea[0].classList.remove('code-pic-area');
    codePicArea[1].classList.remove('code-pic-area');
});

designClose.addEventListener('click', () => {
    designContainer.classList.remove('active');
    designBg.classList.remove('active');
    codePicArea[0].classList.add('code-pic-area');
    codePicArea[1].classList.add('code-pic-area');
});

designBg.addEventListener('click', () => {
    designContainer.classList.remove('active');
    designBg.classList.remove('active');
    codePicArea[0].classList.add('code-pic-area');
    codePicArea[1].classList.add('code-pic-area');
});

const codeOpen = document.querySelector(".code-modal-open");
const codeBg = document.querySelector(".code-modal-bg");
const codeContainer = document.querySelector(".code-modal-container");
const codeClose = document.querySelector(".code-modal-close");

codeOpen.addEventListener('click', () => {
    codeContainer.classList.add('active');
    codeBg.classList.add('active');
});

codeClose.addEventListener('click', () => {
    codeContainer.classList.remove('active');
    codeBg.classList.remove('active');
});

codeBg.addEventListener('click', () => {
    codeContainer.classList.remove('active');
    codeBg.classList.remove('active');
});

const infoThumb = document.querySelector(".info__thumb");
const thumbs = ["becoffee-thumb2.jpg", "becoffee-thumb4.jpg", "becoffee-mv.jpg"];
let count = 0;

function mvChenge() {
    if (count === thumbs.length) count = 0;
    infoThumb.setAttribute("src", `./images/${thumbs[count]}`);
    count++;
}
setInterval(mvChenge, 3000);

const menuBtn = document.querySelector(".menu-btn");
const bar = document.querySelectorAll(".bar");
const menuContents = document.querySelector(".menu-contents");
const wrapper = document.querySelector(".wrapper");
const headerTtl = document.querySelector(".header__ttl");

menuBtn.addEventListener("click", () => {
    menuContents.classList.toggle("open");
    wrapper.classList.toggle("open");
    bar[0].classList.toggle("active");
    bar[1].classList.toggle("active");
    headerTtl.classList.toggle("active");
    for (let i = 0; i < bar.length; i++) {
        bar[i].classList.toggle("open");
    }
});

wrapper.addEventListener("click", () => {
    menuContents.classList.remove("open");
    wrapper.classList.remove("open");
    bar[0].classList.remove("active");
    bar[1].classList.remove("active");
    headerTtl.classList.remove("active");
    for (let i = 0; i < bar.length; i++) {
        bar[i].classList.remove("open");
    }
});
