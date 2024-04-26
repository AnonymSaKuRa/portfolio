const thumbnail = document.querySelector(".works__thumbnail");
const becoffee = document.querySelector(".item1");
const SakuraBlog = document.querySelector(".item2");
const study = document.querySelector(".item3");
const becoffeeInfo = document.querySelector(".becoffee");
const blogInfo = document.querySelector(".blog");
const studyInfo = document.querySelector(".study");

becoffee.addEventListener("mouseover", () => {
    thumbnail.setAttribute("src", `./images/becoffee.png`);
    becoffeeInfo.style.display = "block";
    blogInfo.style.display = "none";
    studyInfo.style.display = "none";
});

SakuraBlog.addEventListener("mouseover", () => {
    thumbnail.setAttribute("src", `./images/SakuraBlog.png`);
    becoffeeInfo.style.display = "none";
    blogInfo.style.display = "block";
    studyInfo.style.display = "none";
});

study.addEventListener("mouseover", () => {
    thumbnail.setAttribute("src", `./images/study.png`);
    becoffeeInfo.style.display = "none";
    blogInfo.style.display = "none";
    studyInfo.style.display = "block";
});

const ttl = this.document.querySelectorAll(".ttl");
for (let i = 0; i < ttl.length; i++) {
    gsap
        .from(ttl[i], {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: ttl[i],
                start: "top 60%",
                end: "bottom 40%"
            }
        })
}

const aboutFlex = document.querySelector(".about__flex");
gsap.from(aboutFlex, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: aboutFlex,
        start: "top 60%",
        end: "bottom 40%"
    }
})

gsap.from(becoffeeInfo, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: becoffeeInfo,
        start: "top 60%",
        end: "bottom 40%"
    }
})

gsap.from(thumbnail, {
    opacity: 0,
    scrollTrigger: {
        trigger: thumbnail,
        start: "top 60%",
        end: "bottom 40%"
    }
})

gsap.from(SakuraBlog, {
    opacity: 0,
    scrollTrigger: {
        trigger: SakuraBlog,
        start: "top 60%",
        end: "bottom 40%"
    }
})

gsap.from(becoffee, {
    opacity: 0,
    scrollTrigger: {
        trigger: becoffee,
        start: "top 50%",
        end: "bottom 50%"
    }
})


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