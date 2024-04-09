const designOpen = document.querySelector(".design-modal-open");
const designBg = document.querySelector(".design-modal-bg");
const designContainer = document.querySelector(".design-modal-container");
const designClose = document.querySelector(".design-modal-close");

designOpen.addEventListener('click', () => {
    designContainer.classList.add('active');
    designBg.classList.add('active');
});

designClose.addEventListener('click', () => {
    designContainer.classList.remove('active');
    designBg.classList.remove('active');
});

designBg.addEventListener('click', () => {
    designContainer.classList.remove('active');
    designBg.classList.remove('active');
});

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