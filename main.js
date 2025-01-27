var s1=document.getElementById("s1")
var s2=document.getElementById("s2")
var s3=document.getElementById("s3")
var off=document.getElementById("off")
var on=document.getElementById("on")
var img=document.getElementById("Img")

s1.onclick=function(){
    img.style.animationName="rotateImg"
    img.style.animationDuration="1s"
    img.style.animationIterationCount="infinite"
    img.style.animationPlayState=" running"

}

s2.onclick=function(){
    img.style.animationName="rotateImg"
    img.style.animationDuration="0.5s"
    img.style.animationIterationCount="infinite"
    img.style.animationPlayState=" running"

}

s3.onclick=function(){
    img.style.animationName="rotateImg"
    img.style.animationDuration="50ms"
    img.style.animationIterationCount="infinite"
    img.style.animationPlayState=" running"

}

on.onclick=function(){
    img.style.animationName="rotateImg"
    img.style.animationDuration="50ms"
    img.style.animationIterationCount="infinite"
    img.style.animationPlayState=" running"

}
off.onclick=function(){
    img.style.animationName="rotateImg"
    img.style.animationPlayState="paused"
}