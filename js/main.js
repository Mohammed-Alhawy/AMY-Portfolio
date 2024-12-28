const openIcon=document.querySelector("#navigation .nav-icon")
const closeIcon=document.querySelector(".close-btn")
const theMenu=document.querySelector("#nav-content")

openIcon.addEventListener("click" , ()=>{
  theMenu.classList.add("show")
})

closeIcon.addEventListener("click" , ()=>{
  theMenu.classList.remove("show")
})