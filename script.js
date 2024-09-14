// var block=document.querySelector("#block1")
// var blockimg=document.querySelector("#block1 img")
// block.addEventListener("mouseenter",function(){
//     blockimg.style.opacity=1
// })

function page2_animation(){
    var rightblock = document.querySelectorAll(".right-blocks")
rightblock.forEach(function(elem){
    elem.addEventListener("mouseenter",function() {
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })               
    })
    elem.addEventListener("mouseleave",function() {
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })               
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-150,
        })
    })
  
    
})
}
page2_animation()

function page3VideoAnimation(){
    var page3center=document.querySelector(".page3-center")
var video=document.querySelector("#page3 video")

page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        
        })
    })
})
}
page3VideoAnimation()


var sections=document.querySelectorAll(".section-right")
sections.forEach(function(elem){
    
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1,
        elem.childNodes[3].play()        
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=1,
        elem.childNodes[3].load()        
    })

})