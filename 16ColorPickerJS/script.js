const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");

const bgColor = (selcetedElement) =>{
    return window.getComputedStyle(selcetedElement).backgroundColor;
}

console.log(bgColor(pink));