gsap.registerPlugin(ScrollTrigger);
var crsr=document.querySelector("#crsr")
var blu=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x +30+"px"
    crsr.style.top=dets.y +"px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
     trigger:"#nav",
     scroll:"body",
     marker:true,
     start:"top-10%",
     scrub:3
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
var h4all= document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){//for each function jo array k liye use hota h 
elem.addEventListener("mouseenter",function(){
crsr.style.scale=3;
crsr.style.border="0.2px solid #fff";
crsr.style.backgroundColor="transparent";
scrub:2
});
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px solid #bbff00";
    crsr.style.backgroundColor=" #bbff00";
scrub:2
});
});
