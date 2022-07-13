const openBtn1 = document.querySelector(".openBtn1")
const openBtn2 = document.querySelector(".openBtn2")
const openBtn3 = document.querySelector(".openBtn3")

const modalContainer1 = document.querySelector(".container-team1")
const modalContainer2 = document.querySelector(".container-team2")
const modalContainer3 = document.querySelector(".container-team3")

const closeBtn1 = document.querySelector(".closeBtn1")
const closeBtn2 = document.querySelector(".closeBtn2")
const closeBtn3 = document.querySelector(".closeBtn3")

openBtn1.addEventListener('click', function (){
    console.log("button has been clicked")
    modalContainer1.classList.add("show")
})

closeBtn1.addEventListener('click', function(){
    modalContainer1.classList.remove("show")

})
openBtn2.addEventListener('click', function (){
    console.log("button has been clicked")
    modalContainer2.classList.add("show")
})
closeBtn2.addEventListener('click', function(){
    modalContainer2.classList.remove("show")
})

openBtn3.addEventListener('click', function (){
    console.log("button has been clicked")
    modalContainer3.classList.add("show")
})

closeBtn3.addEventListener('click', function(){
    modalContainer3.classList.remove("show")
})

