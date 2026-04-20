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
    for(let counter=0;counter<10;counter++){
        const disc=menuItems[counter].querySelector(".boxContent")
        disc.textContent="Description"
        const price=menuItems[counter].lastElementChild
        price.textContent=`$${counter+1}`
    }
    menuItems[0].firstElementChild.textContent="Apple Juice"
    menuItems[1].firstElementChild.textContent="Grape Juice"
    menuItems[2].firstElementChild.textContent="Pear Juice"
    menuItems[3].firstElementChild.textContent="Salad"
    menuItems[4].firstElementChild.textContent="Soup"
    menuItems[5].firstElementChild.textContent="Bread"
    menuItems[6].firstElementChild.textContent="Spaghetti"
    menuItems[7].firstElementChild.textContent="Curry Chicken"
    menuItems[8].firstElementChild.textContent="Wanton Mee"
    menuItems[9].firstElementChild.textContent="Mala Xiang Guo"
}
export default menu