function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

let crsr = document.querySelector('.cursor');
let main = document.querySelector('.main');

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 5 + 'px';
    crsr.style.top = dets.y + 5 + 'px';
});

let vid = document.querySelectorAll('.main video');
let image = document.querySelectorAll('.main img');

vid.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.width = '90px';
        crsr.style.display = 'flex';
        crsr.style.alignItem = 'center';
        crsr.style.justifyContent = 'center';
        crsr.style.borderRadius = '60px';
        crsr.style.cursor = 'pointer';
        crsr.innerHTML = "sound on";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.width = '20px';
        crsr.style.borderRadius = '50%';
        crsr.style.cursor = 'default';
        crsr.innerHTML = "";
    })
})


image.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.width = '90px';
        crsr.style.display = 'flex';
        crsr.style.alignItem = 'center';
        crsr.style.justifyContent = 'center';
        crsr.style.borderRadius = '60px';
        crsr.style.cursor = 'pointer';
        crsr.innerHTML = "view";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.width = '20px';
        crsr.style.borderRadius = '50%';
        crsr.style.cursor = 'default';
        crsr.innerHTML = "";
    })
})





let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page1 h1',
        scroller: '.main',
        // markers: true,
        start: 'top 27%',
        end: 'top 0',
        scrub: 3
    }
})


tl.to(".page1 h1", {
    x: -100,

}, 'anim')

tl.to('.page1 h2', {
    x: 100,
}, 'anim')

tl.to('.page1 video', {
    width: '95%',
}, 'anim')


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page1 h1',
        scroller: '.main',
        // markers: true,
        start: 'top -110%',
        end: 'top -120%',
        scrub: 3
    }
})

tl2.to('.main', {
    backgroundColor: '#fff',
})



let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page1 h1',
        scroller: '.main',
        // markers: true,
        start: 'top -115%',
        end: 'top -125%',
        scrub: 4
    }
})

tl3.to('.page2 h1', {
    y: -20,
    opacity: 1,
    duration: 4,
    stagger: 0.1,
})

tl3.to('.page2-left h2', {
    y: -20,
    opacity: 1,
    duration: 4,
    stagger: 0.2,
})

tl3.to('.page2-right p, button', {
    y: -20,
    opacity: 1,
    duration: 4,
    stagger: 0.2,
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page1 h1',
        scroller: '.main',
        // markers: true,
        start: 'top -480%',
        end: 'top -300%',
        scrub: 3
    }
})

tl4.to('.main', {
    backgroundColor: '#0f0d0d',
})

tl4.to('.page3-part3 h2', {
    color: '#fff',
})

let pg5 = document.querySelector('.page5');
let boxes = document.querySelectorAll('.box');
boxes.forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        let att = box.getAttribute('data-image');
        crsr.style.width = '470px';
        crsr.style.height = '370px';
        crsr.style.borderRadius = '0';
        crsr.style.backgroundImage = `url(${att})`;

    })
    box.addEventListener('mouseleave', function () {
        crsr.style.width = '20px';
        crsr.style.height = '20px';
        crsr.style.borderRadius = '50%';
        crsr.style.backgroundImage = 'none';
    })
})

let h4 = document.querySelectorAll('#nav h4');
let purple = document.querySelector('#purple');
h4.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        purple.style.display = 'block';
        purple.style.opacity = '1';
    })
    elem.addEventListener('mouseleave', function () {
        purple.style.display = 'none';
        purple.style.opacity = '0';
    })
})