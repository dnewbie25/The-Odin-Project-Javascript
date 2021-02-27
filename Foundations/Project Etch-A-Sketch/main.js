const rainbow = document.querySelector('.rainbow-btn');
const blackWhite = document.querySelector('.blackwhite-btn');
const size = document.querySelector('.size-btn')
const drawArea = document.querySelector('.grid-container');
defaultSize = 16;
defaultColor = 'black';

// Create default 16x16 grids
drawArea.style.display = 'grid';
drawArea.style.gridTemplateColumns = 'repeat(16, 1fr)'
for(i = 0; i < defaultSize * defaultSize; i++){
    let gridBox = document.createElement('div');
    gridBox.classList = 'grid-box';
    gridBox.addEventListener('mouseover', changeColor);
    drawArea.appendChild(gridBox);
}


// drawArea.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;

function changeColor(e){
    if (defaultColor === 'black'){
        e.target.style.backgroundColor = 'black';
        }else if(defaultColor === 'rainbow'){
        red = Math.random() * (255 - 0 + 1) + 0;
        green = Math.random() * (255 - 0 + 1) + 0;
        blue = Math.random() * (255 - 0 + 1) + 0;
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }else if (defaultColor === 'blackWhite'){
        opacity = Math.random();
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
        
}

// Event Listeners

size.addEventListener('click', ()=>{
    value = Number(prompt("Enter A New Size:"));
    if (typeof value === 'number' && value <= 64 && value >= 1){
        defaultSize = value;        
        drawArea.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
        for (i = 0; i < defaultSize * defaultSize; i++){
            let gridBox = document.createElement('div');
            gridBox.classList = 'grid-box';
            gridBox.addEventListener('mouseover', changeColor);
            drawArea.appendChild(gridBox);
        }
    }else{
        alert("Please enter a number between 1 and 64.");
        return 0;
    }

    
    
});

rainbow.addEventListener('click', ()=>{
    defaultColor = 'rainbow';
});

blackWhite.addEventListener('click', ()=>{
    defaultColor = 'blackWhite';
});