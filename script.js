var t1 = gsap.timeline();
t1.to("#loader", { 
    y: -300,
    x:200,
    duration:1.5,
    scale:2,
    delay: 0.5,
    ease: "power2.out",
    opacity: 0,
    onComplete: () => {
            document.getElementById("loader").style.display = "none"; 
        }
}); 

 t1.to("#start1", { 
        height: "0vh",
        width: "0vw",
        duration: 1,
        ease: "power3.inOut",
        opacity: 0,
        borderRadius: "50%", 
        transformOrigin: "center center", 
        onComplete: () => {
            document.getElementById("start1").style.display = "none"; 
        }
});
    


t1.from(".logo-container", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: "power3.out"
})
t1.from(".nav-items", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    // delay: 0.2,
    stagger: 0.3,
    ease: "power3.out"
})
t1.from(".nav-items1", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    // delay: 0.2,
    stagger: 0.5,
    ease: "power3.out"
})
t1.from(".imgContainer", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    rotate:360,
    ease: "power2.out"
})
t1.from(".infoContainer", {
    x: 1600,
    opacity: 0.5,
    duration: 1,
    ease: "power3.out"
})
// t1.to(".projectContainer", {
//     transform:"translatex(140%)",
//     duration: 1,
//     ease: "power3.out",
//     stagger:0.3,
//     scrollTrigger: {
//         trigger: "#projects",
//         scroller: "body",
//         scrub: 2,
//         pin:true,
//     }
// })
