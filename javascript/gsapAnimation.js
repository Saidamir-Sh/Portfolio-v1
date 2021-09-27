
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

var tl = gsap.timeline()
tl.from(".progress__bar", {
    height: "100%",
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        scrub: true,
        toggleAction: "restart, none, none, none"
    }
})

/* SVG ANIMATION */

const svgText = document.querySelectorAll("#svg__text path");

for(let i = 0; i < svgText.length; i++) {
    console.log(`Letter ${i} is ${svgText[i].getTotalLength()}`);
}

