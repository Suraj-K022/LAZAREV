var nav=document.querySelector("#page1 h1 span")
nav.addEventListener("mouseenter",function(){
    gsap.to("#page1 h1 span",{
        rotation:270        
    })
})