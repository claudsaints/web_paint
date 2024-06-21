const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

const inputColor = document.querySelector(".color-in");
const sizeBtn = document.querySelector(".size-tool");
const toolBtn = document.querySelectorAll(".button-tool");
const clearBtn = document.querySelector(".button-clear");

let painting = false;

let brushSz = 30;

let aTool = "brush"


inputColor.addEventListener("change",({target}) =>{
    contexto.fillStyle = target.value
})
canvas.addEventListener("mousedown", ({clientX,clientY}) => {
    painting = true
    if(aTool == "brush"){
        draw(clientX,clientY);
    }
    if(aTool == "rubber"){
        erase(clientX,clientY);
    }
})
canvas.addEventListener("mousemove", ({clientX,clientY}) => {

    if (painting){
        if(aTool == "brush"){
            draw(clientX,clientY);
        }
        if(aTool == "rubber"){
            erase(clientX,clientY);
        }
    }
    
    
})
canvas.addEventListener("mouseup", ({clientX,clientY}) => {
    painting = false;

})

const draw = (x,y) => {
    contexto.globalCompositeOperation = 'source-over'
    contexto.beginPath();
    contexto.arc(
        x -canvas.offsetLeft, 
        y - canvas.offsetTop,
        brushSz / 2,
        0,
        2 * Math.PI
    )
    contexto.fill()
    
    // contexto.fillRect(x - canvas.offsetLeft, y - canvas.offsetTop ,brushSz,brushSz);
}

const erase = (x,y) => {
    contexto.globalCompositeOperation = 'destination-out'
    contexto.beginPath();
    contexto.arc(
        x -canvas.offsetLeft, 
        y - canvas.offsetTop,
        brushSz / 2,
        0,
        2 * Math.PI
    )
    contexto.fill()
    
    // contexto.fillRect(x - canvas.offsetLeft, y - canvas.offsetTop ,brushSz,brushSz);
}

const selectTool = ({target}) => {
    const selectedTool = target.closest("button")
    const action = selectedTool.getAttribute("data-action")
    if (action){
        aTool = action
    }


}
toolBtn.forEach((tool) => {tool.addEventListener("click", selectTool)});

