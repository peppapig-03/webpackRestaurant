const bigBox=function(number){
    for(let counter=0;counter<number;counter++){
        const box=document.createElement("div")
        box.classList.add("title")
        content.appendChild(box)
    }
}
const mediumBox=function(number){
    for(let counter=0;counter<number;counter++){
        const box=document.createElement("div")
        box.classList.add("info")
        content.appendChild(box)
        const boxContent=document.createElement("div")
        const title=document.createElement("div")
        const quotes=document.createElement("div")
        boxContent.classList.add("boxContent")
        title.classList.add("boxTitle")
        quotes.classList.add("boxTitle")
        box.appendChild(title)
        box.appendChild(boxContent)
        box.appendChild(quotes)
    }
}
const smallBox=function(number){
    for(let counter=0;counter<number;counter++){
        const box=document.createElement("div")
        box.classList.add("miniTitle")
        content.appendChild(box)
    }
}
export {bigBox,mediumBox,smallBox}