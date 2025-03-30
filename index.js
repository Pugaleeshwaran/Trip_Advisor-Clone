var s1 = document.getElementById("s1")
var s2 = document.getElementById("s2")
var s3 = document.getElementById("s3")
var s4 = document.getElementById("s4")
var s5 = document.getElementById("s5")
var s6 = document.getElementById("s6")
var result = document.getElementById("result")

s1.addEventListener("click",function(){
    result.textContent="Where to?"
})
s2.addEventListener("click",function(){
    result.textContent="Stay somewhere great"
})
s3.addEventListener("click",function(){
    result.textContent="Do something fun"
})
s4.addEventListener("click",function(){
    result.textContent="Find places to eat"
})
s5.addEventListener("click",function(){
    result.textContent="Find the best flight"
})
s6.addEventListener("click",function(){
    result.textContent="Explore places to rent"
})