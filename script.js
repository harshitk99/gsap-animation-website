// var arrow=document.querySelector("#arrow-div")
// arrow.addEventListener("mouseover",function(){
//     arrow.style["scale"] = "1.4";
// })

var timeline=gsap.timeline();



timeline.from("#nav h2",{
    opacity:0,
    y:-100,
    delay:0.7,
    duration:0.3
})

timeline.from("#nav h3",{
    opacity:0,
    y:-10,
    stagger:0.3,
    duration:0.3    
})

timeline.from("#nav button",{
    opacity:0,
    y:-10,
    duration:0.3  
})

timeline.from("#page1content",{
    x:-30,
    opacity:0,
    duration:0.4
})

timeline.from("#textmp1 h3",{
    // x:"1000%",
    duration:0.5,
    opacity:0
})

gsap.to("#page2 video",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.from("#page3 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 60%",
        end:"top 0",
        // markers:true,
        scrub:1
    }
})

gsap.from(".cards",{
    x:-120,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 15%",
        end:"top 10",
        // markers:true,
        // scrub:1,
        // pin:true
    }
})

