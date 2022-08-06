let smallcanvasvalue = 10;
let mediumcanvasvalue = 20;
let largecanvasvalue = 50;
let smallbool = false;
let mediumbool = false;
let largebool = false;
clearCanvasDivs = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const canvas = document.querySelector('.canvas');

let x = smallcanvasvalue;
createCanvas = (x) => {

  for (let i = 0; i < (x * x); i++) {
    const canvaselement = document.createElement('div');
    canvaselement.classList.add('canvas-element');
    canvaselement.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
    canvas.appendChild(canvaselement);
  }

}



const smallButton = document.getElementById('smallbutton');

smallButton.addEventListener('click', function (event) {
  clearCanvasDivs(canvas);
  canvas.setAttribute('style', `grid-template-columns: repeat(${smallcanvasvalue}, 1fr);
  grid-template-rows: repeat(${smallcanvasvalue}, 1fr);`)
  createCanvas(smallcanvasvalue);

})

const mediumButton = document.getElementById('mediumbutton');

mediumButton.addEventListener('click', function (event) {
  clearCanvasDivs(canvas);
  canvas.setAttribute('style', `grid-template-columns: repeat(${mediumcanvasvalue}, 1fr);
  grid-template-rows: repeat(${mediumcanvasvalue}, 1fr);`)
  createCanvas(mediumcanvasvalue);

})

const largeButton = document.getElementById('largebutton');

largeButton.addEventListener('click', function (event) {
  clearCanvasDivs(canvas);
  canvas.setAttribute('style', `grid-template-columns: repeat(${largecanvasvalue}, 1fr);
  grid-template-rows: repeat(${largecanvasvalue}, 1fr);`)
  createCanvas(largecanvasvalue);

})


let canvasarray = canvas.children;


const colorPicker = document.getElementById('colorpicker');

colorPicker.addEventListener('input', function (event) {

  let colorPickerValue = document.getElementById('colorpicker').value;
  var gridsize = canvas.getElementsByClassName('canvas-element').length;
  for (let i = 0; i < gridsize; i++) {
    canvasarray[i].addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = colorPickerValue;

    })
  }
})

const blackButton = document.getElementById('black-button');

blackButton.addEventListener('click', function () {
  var gridsize = canvas.getElementsByClassName('canvas-element').length;
  for (let i = 0; i < gridsize; i++) {
    canvasarray[i].addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
  }
})

const eraserButton = document.getElementById('eraser');

eraserButton.addEventListener('click', function () {
  var gridsize = canvas.getElementsByClassName('canvas-element').length;
  for (let i = 0; i < gridsize; i++) {
    canvasarray[i].addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'white';
    })
  }
})

createCanvas(x);

