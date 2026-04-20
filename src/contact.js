import {bigBox,mediumBox} from "./box.js"
const about=function(){
    bigBox(1)
    mediumBox(3)
    const titleBox=document.querySelector(".title")
    titleBox.textContent="Contact"
    const people=document.querySelectorAll(".info")
    for(let counter=0;counter<3;counter++){
        people[counter].firstElementChild.textContent=`Staff #${counter+1}`
        people[counter].removeChild(people[counter].lastElementChild)
        const infoStuff=people[counter].querySelector(".boxContent")
        infoStuff.textContent="Role\r\nPhone Number\r\nEmail"
        infoStuff.style.textAlign="left"
    }
}
export default about