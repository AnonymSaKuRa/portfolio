const careerTtl = document.querySelector(".career__ttl");
const careerList = document.querySelectorAll(".career__list");
const careerIntroduction = document.querySelectorAll(".career__introduction p");

gsap.from(careerTtl, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: careerTtl,
        start: "top 60%",
        end: "bottom 40%"
    }
})

for (let i = 0; i < careerList.length; i++) {
    gsap.from(careerList[i], {
        opacity: 0,
        x: -50,
        scrollTrigger: {
            trigger: careerList[i],
            start: "top 60%",
            end: "bottom 40%"
        }
    })
}


for (let i = 0; i < careerIntroduction.length; i++) {
    gsap.from(careerIntroduction[i], {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: careerIntroduction[i],
            start: "top 75%",
            end: "bottom 25%"
        }
    })
}

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
