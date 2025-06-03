const board = document.getElementById('board');
const clear = document.getElementById('clear');


function makeGrid() {
    for (let i=0; i<256; i++) {
     const div = document.createElement('div');
        div.classList.add('grid');
        board.appendChild(div);
    
        div.addEventListener('mousedown', () => {
        div.style.backgroundColor = 'black'
        })
    }
}
makeGrid();

clear.addEventListener('click', () => {
    
})
    
