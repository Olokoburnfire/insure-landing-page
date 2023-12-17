let hamburgerBtn = document.querySelector(".hamburger")
let closeBtn = document.querySelector(".close")
// let navMenu = document.getElementsByClassName("nav-list-container")
let navMenu = document.querySelector(".nav-list-container")





const menuFunction = () =>{
  navMenu.classList.remove("nav-list-close")
  navMenu.classList.add("nav-list-open")
  hamburgerBtn.style.display = "none"
  closeBtn.style.display= "flex"
  closeBtn.style.opacity= "1"
  console.log('opened')
}
const closeMenuFunction = () =>{
  navMenu.classList.remove("nav-list-open")
  navMenu.classList.add("nav-list-close")
  hamburgerBtn.style.display = "flex"
  closeBtn.style.display= "none"
  console.log('closed')
}
