const canvaDiv = document.getElementById('canva');
const slider = document.getElementById('sizeSelector');

let canvaSize = 16;

function createCanva(size){

    let canvaCell;
    for(let i = 0; i < size*size; i++){
        canvaCell = document.createElement('div');
        canvaCell.className = 'cell';
        document.getElementById('canva').appendChild(canvaCell);
    }
    document.getElementById('canva').style.gridTemplate= `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
}

slider.onchange = (e) =>{
    createCanva(e.target.value);
}