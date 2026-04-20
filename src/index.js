import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
const buttonArray = document.querySelectorAll("button")
const content = document.querySelector("#content")
const clearContents = function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
}
const clearButtonColor = function () {
    buttonArray.forEach((button) => {
        button.style.backgroundColor = "#A3D5FF"
        button.classList.add("inactive")
    })
}
const funcArray = [home, menu, contact]
buttonArray.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        clearContents()
        clearButtonColor()
        funcArray[index]()
        event.target.style.backgroundColor="#6F9CDE"
        event.target.classList.remove("inactive")
    })
})
const buttons = document.querySelectorAll("button")
buttons[0].click()
