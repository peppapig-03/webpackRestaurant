import {bigBox,mediumBox,smallBox} from "./box.js"
const menu=function(){
    bigBox(1)
    const titleBox=document.querySelector(".title")
    titleBox.textContent="Menu"
    smallBox(1)
    mediumBox(3)
    smallBox(1)
    mediumBox(3)
    smallBox(1)
    mediumBox(4)
    const menuItems=document.querySelectorAll(".info")
    const menuCategories=document.querySelectorAll(".miniTitle")
    menuCategories[0].textContent="Beverages"
    menuCategories[1].textContent="Sides"
    menuCategories[2].textContent="Main Courses"
}
export default menu