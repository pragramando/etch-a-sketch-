    const canvaDiv = document.getElementById('canva');
    const slider = document.getElementById('slider');
    const pageBody = document.getElementsByTagName('body');
    let canvaSize = 16;
    let choosenColor = 'black';
    let choosenMode = 'normal';

    //erases all cells from canva div
    function deleteCells(){
        canvaDiv.innerHTML = '';
    }

    //changes cell's color according to mode
    function changeColor(cell){
        if(choosenMode === 'normal'){
            cell.target.style.backgroundColor = choosenColor;
        }
        else if(choosenMode === 'rainbow'){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.target.style.backgroundColor = '#' + randomColor;
        }
        else{
            cell.target.style.backgroundColor = 'white';
        }
    }


    function changeMode(mode){
        choosenMode = mode;
    }

    //function creates grid of canvaSize and appends to canvaDiv
    function createCanva(){

        let canvaCell;
        deleteCells();
        for(let i = 0; i < canvaSize*canvaSize; i++){
            canvaCell = document.createElement('div');
            canvaCell.className = 'cell';
            canvaCell.addEventListener('mouseover', changeColor);
            document.getElementById('canva').appendChild(canvaCell);
        }
        document.getElementById('canva').style.gridTemplate= `repeat(${canvaSize}, 1fr) / repeat(${canvaSize}, 1fr)`;
    }

    let rainbowButton = document.getElementById('rainbowBtn');
    rainbowButton.onclick = () => changeMode('rainbow');

    let eraserButton = document.getElementById('eraserBtn');
    eraserButton.onclick = () => changeMode('eraser');

    let colorSelector = document.getElementById('colorSelector');
    colorSelector.onchange = (e) =>{
        changeMode('normal');
        choosenColor = e.target.value;
    }

    slider.onchange = (e) =>{
        canvaSize = e.target.value;
        createCanva();
    }

    window.addEventListener("load", createCanva);