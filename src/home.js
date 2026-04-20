import {bigBox,mediumBox} from "./box.js"
const home=function(){
    bigBox(1)
    const titleBox=document.querySelector(".title")
    titleBox.textContent="Restaurant Breakfast"
    mediumBox(3)
    const infoBoxArray=document.querySelectorAll(".info")
    infoBoxArray[0].removeChild(infoBoxArray[0].firstElementChild)
    infoBoxArray[0].querySelector(".boxContent").textContent="meaningful quote"
    infoBoxArray[0].querySelector(".boxTitle").textContent="Quote author"
    infoBoxArray[1].removeChild(infoBoxArray[1].lastElementChild)
    infoBoxArray[1].querySelector(".boxTitle").textContent="Hours"
    infoBoxArray[1].querySelector(".boxContent").textContent="Monday: 8.00am-10.00pm\r\nTuesday: 6.00am-6.00pm\r\nWednesday: 7.00am-7.00pm\r\nThursday: 8.00am-10.00pm\r\nFriday: 7.30am-9.30pm\r\nSaturday: 6.00am-12.00am\r\nSunday: 8.00am-10.00pm"
    infoBoxArray[2].removeChild(infoBoxArray[2].lastElementChild)
    infoBoxArray[2].querySelector(".boxTitle").textContent="Location"
    infoBoxArray[2].querySelector(".boxContent").textContent="123 Forest Drive, Pulau Tekong, Singapore"
}
export default home