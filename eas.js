const canvaDiv = document.getElementById('canva');

function createCanva(size){
    let canvaCell;
    let numberCollumns = size/16;
    for(let i = 0; i < size*size; i++){
        canvaCell = document.createElement('div');
        canvaCell.className = 'cell';
        document.getElementById('canva').appendChild(canvaCell);
    }
    document.getElementById('canva').style.gridTemplate= `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
}
createCanva(16);
