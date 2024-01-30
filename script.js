function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
init()
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scrub:1,
markers:true,
    start:"top -1%",
    end:"top -5%",
    scroller:"#main"
  }
})
tl.from("h2",{
  top:"-10%",
  opacity:0
})
tl.from("h4",{
//   top:"60%",
  opacity:0
},"-=.2")
tl.from("#h1",{
  top:"80%",
  opacity:0
},"-=.4")
tl.from(".wc",{
 left:"20%",
  opacity:0
},"-=.6")
tl.from("#bc",{
  left:"70%",
   opacity:0
 },"-=.8")
 tl.from("h1",{
    top:"70%",
    rotate:"3deg",
     opacity:0
   },"-=.8")
var img = document.querySelector("#page6 img")
var sqr = document.querySelector("#page6 .sqr")
img.addEventListener("mouseenter",function(){
    sqr.style.display = "block"
   })
   img.addEventListener("mouseleave",function(){
       sqr.style.display = "none"
      })
img.addEventListener("mousemove",function(dets){
    sqr.style.top = `${dets.y + 15}px`
    sqr.style.left = `${dets.x + 15}px`
})
var elem1 = document.querySelector("#page5 .elem1")
var p5 = document.querySelector("#page5 ")
var elem2 = document.querySelector("#page5 .elem2")
var elem3 = document.querySelector("#page5 .elem3")
var elem4 = document.querySelector("#page5 .elem4")
var elem5 = document.querySelector("#page5 .elem5")
var h1 = document.querySelector("#page5 .elem1 h1")
var he = document.querySelector(".elem1 .h1 ")
var h2 = document.querySelector("#page5 .elem2 h1")
var he2 = document.querySelector(".elem2 .h1 ")
var h3 = document.querySelector("#page5 .elem3 h1")
var he3 = document.querySelector(".elem3 .h1 ")
var h4 = document.querySelector("#page5 .elem4 h1")
var he4 = document.querySelector(".elem4 .h1 ")
var h5 = document.querySelector("#page5 .elem5 h1")
var he5 = document.querySelector(".elem5 .h1 ")
elem1.addEventListener("mouseenter",function(){
  h1.style.display="none"
  he.style.display="block"
  p5.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0632/8192/2264/files/27_1_1800x.jpg?v=1683354688)`
p5.style.backgroundPosition = "center"
p5.style.backgroundSize = "cover"
  
})
elem1.addEventListener("mouseleave",function(){
  he.style.display="none"
  h1.style.display="block"
  p5.style.backgroundColor = "black"
  p5.style.backgroundImage = "none"


  
})
elem2.addEventListener("mouseenter",function(){
  h2.style.display="none"
  he2.style.display="block"
  p5.style.backgroundImage = `url(https://ventsmagazine.com/wp-content/uploads/2023/05/image-340.png)`
  p5.style.backgroundPosition = "center"
  p5.style.backgroundSize = "cover"
  
})
elem2.addEventListener("mouseleave",function(){
  he2.style.display="none"
  h2.style.display="block"
  p5.style.backgroundColor = "black"
  p5.style.backgroundImage = "none"
  
})
elem3.addEventListener("mouseenter",function(){
  h3.style.display="none"
  he3.style.display="block"
  p5.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0632/8192/2264/articles/Sihoo-5_400x.jpg?v=1684892218)`
  p5.style.backgroundPosition = "center"
  p5.style.backgroundSize = "cover"
  
})
elem3.addEventListener("mouseleave",function(){
  he3.style.display="none"
  h3.style.display="block"
  p5.style.backgroundColor = "black"
  p5.style.backgroundImage = "none"
  
})
elem4.addEventListener("mouseenter",function(){
  h4.style.display="none"
  he4.style.display="block"
  p5.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0632/8192/2264/articles/IMG_2983_3ea2aa02-7cee-488d-bc58-57b61333b639_400x.jpg?v=1686120185)`
  p5.style.backgroundPosition = "center"
  p5.style.backgroundSize = "cover"
  
})
elem4.addEventListener("mouseleave",function(){
  he4.style.display="none"
  h4.style.display="block"
  p5.style.backgroundColor = "black"
  p5.style.backgroundImage = "none"
  
})
elem5.addEventListener("mouseenter",function(){
  h5.style.display="none"
  he5.style.display="block"
  p5.style.backgroundImage = `url(https://gofairwaytrading.com/wp-content/uploads/2022/01/%E8%84%8A%E6%A4%8E-scaled.jpg)`
  p5.style.backgroundPosition = "center"
  p5.style.backgroundSize = "cover"
  
})
elem5.addEventListener("mouseleave",function(){
  he5.style.display="none"
  h5.style.display="block"
  p5.style.backgroundColor = "black"
  p5.style.backgroundImage = "none"
  
})