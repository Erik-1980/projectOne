const slide = document.querySelectorAll(".slides")
for (const slides of slide) {
    slides.addEventListener("click", ()=> {
        activeClasses()
        slides.classList.add("active")
    })
}
function activeClasses(){
    slide.forEach((slides) => {
        slides.classList.remove("active")})
}

let number = 0
let action=document.querySelectorAll(".add");
action.forEach(function(click){
    click.onclick = pushCart
    function pushCart (){
        number++
        document.querySelector(".display").innerHTML=number;
        let wasClass = document.querySelector(".display");
        wasClass.classList.add("on")
}})