const canvas = document.querySelector("canvas"); 
const contexto = canvas.getContext("2d");
//bottons 
const inputColor = document.querySelector(".color-in");
const sizeBtn = document.querySelector(".size-tool");
const toolBtn = document.querySelectorAll(".button-tool");
const clearBtn = document.querySelector(".button-clear");
const downBtn = document.querySelector(".button-download")
//variáveis com "medidas"
let painting = false;

let brushSz = 20;

let aTool = "brush"

color = "#000";

//definir o fundo como branco
const setCanvasBackground = () => {
    contexto.fillStyle = '#fff';
    contexto.fillRect(0,0,canvas.width,canvas.height);
    contexto.fillStyle = color
}
//define o tamanho do canvas e chama a f anterior
window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height =   canvas.offsetHeight;
    setCanvasBackground();
})
//muda a cor com base no escolhido
inputColor.addEventListener("change",({target}) =>{
    contexto.fillStyle = target.value
})
//evento mouse segurado
canvas.addEventListener("mousedown", ({clientX,clientY}) => {
    painting = true
    if(aTool == "brush"){
        draw(clientX,clientY);
    }
    if(aTool == "rubber"){
        erase(clientX,clientY);
    }
})
//evento mouse se mechendo
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
//evento mouse livre
canvas.addEventListener("mouseup", ({clientX,clientY}) => {
    painting = false;

})
//define o desenho
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
//borracha
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
//ferramenta selecionada
const selectTool = ({target}) => {
    const selectedTool = target.closest("button")
    const action = selectedTool.getAttribute("data-action")
    if (action){
        aTool = action
    }
}
toolBtn.forEach((tool) => {tool.addEventListener("click", selectTool)});

//tamanho do pincel
sizeBtn.addEventListener("change", () => brushSz = sizeBtn.value);

//clear
clearBtn.addEventListener("click", () => {
    contexto.clearRect(0,0,canvas.width,canvas.height); //clear screen
    setCanvasBackground()
})
//download
downBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
})
