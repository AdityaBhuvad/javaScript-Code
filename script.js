console.log("Script is Initializing...");
let boxes = document.getElementsByClassName("box");

function ran() {
    let val1 = Math.ceil(1 + Math.random() * 250);
    let val2 = Math.ceil(1 + Math.random() * 250);
    let val3 = Math.ceil(1 + Math.random() * 250);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach((e) => {
    e.style.backgroundColor = ran();
})