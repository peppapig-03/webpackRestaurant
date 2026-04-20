import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"
const buttonArray=document.querySelectorAll("button")
const content=document.querySelector("#content")
const clearContents=function(){
    while (content.firstChild){
        content.removeChild(content.lastChild)
    }
}
const clearButtonColor=function(){
    buttonArray.forEach((button)=>{
        button.style.backgroundColor="#A3D5FF"
    })
}
const funcArray=[home,menu,about]
buttonArray.forEach((button,index)=>{
    button.addEventListener("click",(event)=>{
        clearContents()
        clearButtonColor()
        funcArray[index]()
        event.target.style.backgroundColor="#6F9CDE"
    })
})
const homeButton=document.querySelector("button")
homeButton.click()
