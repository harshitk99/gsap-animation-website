var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x -100+"px"
    blur.style.top=dets.y -100+"px"
    
    

})

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