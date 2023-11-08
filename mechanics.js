// МАЛЮВАННЯ
var canvas = document.getElementById("canvas");
canvas.width = 7680;
canvas.height = 3850;
var ctx = canvas.getContext("2d");
const clear = document.getElementById('b')

console.log('values:')
console.log('canvas.width =', canvas.width)
console.log('canvas.height =', canvas.height)

function getThing() {
    var getC = document.getElementById("C").value;
    var getS = document.getElementById("S").value;
    
    return {
        getC, getS
    }
}

clear.addEventListener('click' , function(){
    canvas.width = canvas.width;
})

function draw(e) {
    if (drawing == false) return;
    let editor = getThing();
    ctx.lineWidth = editor.getS;
    ctx.strokeStyle = editor.getC;	
    ctx.lineCap ="round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.moveTo(e.clientX, e.clientY);
    ctx.stroke();

}

function startDraw(e) {
    drawing = true;
    draw(e);
}

function overDraw() {
    drawing = false;
    ctx.beginPath();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", overDraw);
canvas.addEventListener("mousemove", draw);

// ЗМІНА ФОНУ
const change = document.getElementById("bgchoose")
const cbg = document.getElementById("body")
change.addEventListener('click' , function(){
    cbg.classList.toggle('cell')
})