var t1 = gsap.timeline();

// opening page animation

t1.to("#loader", { 
    y: -300,
    x:200,
    duration:0.9,
    scale:2,
    delay: 0.4,
    ease: "power2.out",
    opacity: 0,
    onComplete: () => {
            document.getElementById("loader").style.display = "none"; 
        }
}); 

t1.to("#start1", { 
        height: "0vh",
        width: "0vw",
        duration: 0.8,
        ease: "power2.Out",
        opacity: 0,
        borderRadius: "50%", 
        transformOrigin: "center center", 
        onComplete: () => {
            document.getElementById("start1").style.display = "none"; 
        }
});
    

// navbar animation
t1.from(".logo-container , .nav-items1, .nav-items", {
    y: -18,
    opacity: 0,
    duration: 1.5,
    delay: 0.1,
    ease: "power3.out",
    stagger:0.08,
})

// hero page animation
t1.from(".imgContainer", {
    x: -200,
    opacity: 0,
    duration: 0.7,
    rotate:360,
    ease: "power2.out"
},"abc")
t1.from(".infoContainer", {
    x: 200,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
},"abc")

// faded text on landing page
var faded = document.querySelector(".fadedText.absolute");
var fade = faded.textContent;
var fadedArray = fade.split("");
var fadedlength = fadedArray.length / 2;
var clutter = ""

fadedArray.forEach(function (ele, ind) {
    if (ind < fadedlength) {
        clutter += `<span class='ac'>${ele}</span>`;
    }
    else {
        clutter += `<span class='bc'>${ele}</span>`;
    }
    faded.innerHTML = clutter
});

t1.from(".ac", {
    y: -100,
    bottom:"28%",
    duration: 0.7,
    stagger: 0.17,
    opacity: 0,
    
},"abc")
t1.from(".bc", {
    y: -100,
    bottom:"28%",
    duration: 0.7,
    stagger: -0.17,
    opacity: 0,
    
},"abc")
