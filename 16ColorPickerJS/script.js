const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");

const bgColor = (selcetedElement) =>{
    return window.getComputedStyle(selcetedElement).backgroundColor;
}

// let pinkElementColor = bgColor(pink);

// pink.addEventListener("mouseenter",() =>{
//     center.style.background = pinkElementColor;
// });

const magicColorChanger = (element , color) =>{
    return element.addEventListener("mouseenter",() =>{
    center.style.background = color;
});

}

magicColorChanger(red, bgColor(red) );
magicColorChanger(orange, bgColor(orange) );
magicColorChanger(pink, bgColor(pink) );
magicColorChanger(cyan, bgColor(cyan) );
magicColorChanger(violet, bgColor(violet) );
