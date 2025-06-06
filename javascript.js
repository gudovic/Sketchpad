const board = document.getElementById('board');
let mouseDown = false;
document.body.addEventListener('pointerdown', () => mouseDown = true);
document.body.addEventListener('pointerup', () => mouseDown = false);


function makeGrid(scale) {
	board.innerHTML = "";
	const setSize = scale*scale;
  
	for (let i=0; i<setSize; i++) {
  	const squares = document.createElement('div');
    board.append(squares);
    squares.classList.add('grid');
    squares.isWhite = true;
    // 400 is the boardheight i should probably declare it and not hardcode it
    squares.style.height = 400/scale + 'px';
    squares.style.width = 400/scale + 'px';

    squares.addEventListener('pointerdown', () => {
      if (squares.isWhite == true) {
      	squares.style.backgroundColor = 'black';
        squares.isWhite = false;
      } else {squares.style.backgroundColor = 'white';
      				squares.isWhite = true;
       }
    });
    squares.addEventListener('pointerenter', () => {
  	if (mouseDown) {
      if (squares.isWhite == true) {
      	squares.style.backgroundColor = 'black';
        squares.isWhite = false;
      } else {squares.style.backgroundColor = 'white';
      				squares.isWhite = true;
       }
    }
});
  }
} 
makeGrid(16);

document.getElementById('button-small').addEventListener('pointerdown', () => {
    		makeGrid(16);
    })
document.getElementById('button-mid').addEventListener('pointerdown', () => {
    		makeGrid(32);
    })
document.getElementById('button-big').addEventListener('pointerdown', () => {
    		makeGrid(64);
    })
    
document.getElementById('clear').addEventListener('pointerdown', () => {
			const squares =	document.querySelectorAll('.grid')
      squares.forEach(square => square.style.backgroundColor = 'white');
    })