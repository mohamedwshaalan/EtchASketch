const canvas = document.querySelector('.canvas');
createCanvas = () => {

  for (let i = 0; i < (10 * 10); i++) {
    const canvaselement = document.createElement('div');
    canvaselement.classList.add('canvas-element');
    canvaselement.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
    canvas.appendChild(canvaselement);
  }

}
createCanvas();